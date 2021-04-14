---
title: API Gateway
description: Learn how to use TeamCentral's API Gateway.
---
## Authentication 

Central uses OAuth 2 Client Credentials grant in order to authenticate.   

Step 1 – Post the Client ID, Client Secret, and Grant Type to the route below provided by the Central Team.  It is the Client’s responsibility to store the Client ID and Secret in a secure and encrypted location. 

 
```json
POST - https://{provided by Central Team}/api/securitytokens 
{ 
"client_id": "provided by Central team", 
"client_secret": "provided by Central team", 
"grant_type": "client_credentials" 
} 
```
 

Step 2 – The response will include an Access Token and the Expires On date.  It is recommended to try and re-use the Access Token where possible. 

 
```json
RESPONSE 
{ 
"accessToken":"", 
"expiresOn": "", 
"tokenType": "" 
} 
```
 

Step 3 – For all of the routes you must include an Authorization Header with the value ``` “Bearer {Access Token}” ```

## Routes/Entities

Central currently supports the following list of Entities from the API Gateway.  We call this list our Core Entity Types: Person, Company, Org Units, Product, Project, Project Resource, Project Task, Time Sheet, Time Entry, Expense Entry, Lead, Opportunity, Sales Order, Invoice, Financial Transaction, Financial Account, Collaboration Space, File, Calendar Entry.  This list will continue to grow over time. 

All of the definitions for the routes and entity definitions for your instance can be retrieved by navigating to https://{provided by Central Team}/swagger/docs/v1.  The “Definitions” Section shows the schema for each entity we support.  The “Paths” Section shows all of the routes we currently support. 

### Entity Schema Details 

The Entities with the namespace ```Central.Business.Entities.Core``` are indexed and stored inside of the Central database 

The Entities with the namespace ```Central.Business.Entities.Integration``` are used in the API Gateway.  All Integration Entities inherit/extent their corresponding Core Entities. 

The Central ```TypedMessage``` is the schema for Messages integrated within Central.  The Payload for each TypedMessage is an Integration Entities. 

The WorkflowFlowMessage is a wrapper around the ```TypedMessage``` used specifically for more advanced Workflows outside of the main Event Stream processing (more info under the Route Details below). 

Central uses what are called ```SystemKey’s``` to uniquely identity entities involved in integrations.  A SystemKey basically identifies an entity within a System.  Each Integration Entity contains a List of PrimaryKey’s and ForeignKey’s.  When a message is posted to our Event Stream the Central Engine accumulates all of the keys needed for that Message to successfully run across systems. 

Each Integration Entity also has a list of what is called ```CustomData```.  That is basically a list of name value pairs that can be used for customer specific fields or fields that may not be on the Integration Entity today. 

>For cases where a customer may have a very proprietary piece of data that may not fit into any of the Core Entity Types, Central has what are called CustomEntities. 

### Route Details 

Any POST route listed as ```/api/{entitytype}messages``` is a mechanism to post a message into our Event Stream 

Any POST route listed as ```/api/workflow{entitytype}messages``` is a mechanism to post a message that triggers a more advanced workflow or orchestration 

Any GET route listed as ```/api/coreenties/{entitytype}``` is a way to just query data directly out of the Central Database with no integration API calls 

Any GET route listed as ```/api/liteentities/{entitytype}``` is a way to query an even lighter version of the entity that mainly just has the internal Central unique identifier of the entity and the name 

Any GET route listed as ```/api/{entitytype}/{id}``` returns the entity in Central by the Central unique identifier 

Any GET route listed as ```/api/{entitytype}/{sourceSystemId}/{sourceSystem}``` returns the entity in Central based on the unique identifier of a particular system 

The routes listed as ```/api/users``` or ```/api/activities``` or a ```pi/botdatarequestmessages``` are used by our bot applications. 


## Webhooks
Central supports sending messages in for integration via webhooks.  This can be helpful for custom solutions you may be building where you want to take a raw Json payload and let Central map it contents to other systems. 

```json
POST – api/webhookmessages 

{ 
"messageId": "gets set internally", 
"transactionType": "Description of the Event", 
"system": "System Name", 
"pubSubId": "Unique identifier of the End Point that is publishing the message", 
"type": "Core Entity Type", 
"userIdentity": "can be set to a specific user or some type of system user to show up in logs", 
"payload": "serialized json of the entity you are putting on the Bus" 
} 
```
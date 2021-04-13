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
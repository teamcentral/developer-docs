Advanced developer documentation for TeamCentral.

To build locally, install the Gatsby Cli 
```
npm install -g gatsby-cli
```

Next clone and install repo dependencies
```
npx gatsby new team-central-docs https://github.com/teamcentral/developer-docs.git
```

Lastly, cd into the repo ```cd team-central-docs```

To push to GitHub (this will build the local files for static use and upload them to Github to be served by Github pages.
```
npm run deploy
```

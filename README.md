Make sure Gatsby CLI is installed
```sh
npm install -g gatsby-cli
```

## Set Up
1. Clone the repo.

   ```sh
   npx gatsby new central-docs https://github.com/chrislevinecentric/chrislevinecentric.github.io
   ```

2. Init your GitHub Repo
   
   ```sh
   Commands that GitHub give you
   ```
   
3. Set up custom domain on your repo

   ```sh
   Repo > Settings > GitHub Pages > Custom Domain > docs.teamcentral.io
   Note: DNS records already in place just waiting for that CNAME
   ```

4. Start developing.

   ```sh
   cd central-docs
   gatsby develop
   ```
   
5. Once ready to push run:
  
   ```sh
   npm run deploy
   ```
  
## Maintance
1. Keeping code up to date

   ```sh
   npm update
   ```

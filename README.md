# Instagrapp

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Project description

This project is using instagrams basic display API to fetch images and save them to Airtable. 
The application then fetches images from Airtable API and displays them in the interface.

Tech stack:
- Netlify serverless functions
- Instagram basic display API
- Airtable API
- React router dom

Documentation on netlify serverless functions:
https://docs.netlify.com/functions/overview/#manage-your-serverless-functions

## Run app

This app is using npm as package manager, start with installing all npm dependencies:

```bash
npm install
```

To start the server and load netlify functions, use the netlify-cli:

```bash
brew install netlify-cli
```

```bash 
netlify dev
```

### Ideas and to-do's:

- Only save unique images to Airtable 
- Performance 
- Lazy load images 
- Sort portfolio images into two categories
- Implement styled components or SASS
# Google Maps Playground

Google Maps Playground is a project intended to test out Google Maps Javascript API. It uses webpack and webpack-dev-serve to serve a single html page with a map.

## Getting Started

Before starting server, install dependencies:

```
npm i
```

To add Google Maps API Key, change "API-KEY" in index.js:

```
const loader = new Loader({
    apiKey: "API-KEY",
    version: "weekly",
});
```

To start server:

```
npm start
```

## How is this setup?

The webpack is setup to look at src/index.js as its entrypoint (webpack.config.js contains the webpack configuration). Inside the index.js, the map div is created. When the div is rendered in the body, the google maps api is loaded and a map object is created referencing the div created in previous step.

## Where should I make changes to the map?

I've provide a empty function within index.js, handleMapLoad, which is a callback that receives the map object. Make changes to this function.

Alternatively, the resolve callback can be changed to do something else when the map is created in index.js

```
loader.load()
            .then(myCustomLoadCallback)
```
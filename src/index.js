import { Loader } from '@googlemaps/js-api-loader';
import _ from 'lodash';
import './index.css';

function component() {
    const element = document.createElement('div');

    element.id = 'map';
  
    return element;
}

function handleMapLoad(map) {}

function loadMap() {
    const loader = new Loader({
        apiKey: "API-KEY",
        version: "weekly",
    });

    loader.load()
        .then(() => {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
        handleMapLoad(map);
    })
    .catch((e) => {
        console.error(e);
    });
}

document.body.appendChild(component());

let intervalId;
let isLoaded = false;

intervalId = setInterval(() => {
    isLoaded = !!document.getElementById('map');

    if (isLoaded) {
        clearInterval(intervalId);
        loadMap();
    }
}, 50);


import { LngLat } from 'mapbox-gl';
import { writable } from 'svelte/store';

export const selectedLocationName = writable('');
export const selectedCoordinates = writable(LngLat.convert([0, 0]));
export const temperature = writable(0);
export const windSpeed = writable(0);
export const map = writable();
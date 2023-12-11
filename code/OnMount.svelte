onMount(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaW5mMzE5IiwiYSI6ImNsbjIwNGxtajA0OHMyaW5yZ2pwdjdzdmQifQ.dcde7lQq6RN9tl5V91lMjg';

    $map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/inf319/cln2208t6031101nzbzvshgt1',
      zoom: 12,
    });
  });
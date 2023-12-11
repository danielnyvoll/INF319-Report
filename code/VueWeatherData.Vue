<template>
  <div v-if="weatherData">
    <!-- Current weather display section -->
    <div class="current-weather">
      <h3>Current Weather for {{ placeName }}</h3>
      <p><strong>Temperature:</strong> {{ weatherData.properties.timeseries[0].data.instant.details.air_temperature }}°C</p>
      <p><strong>Wind:</strong> {{ weatherData.properties.timeseries[0].data.instant.details.wind_speed }} m/s</p>
      <p><strong>Humidity:</strong> {{ weatherData.properties.timeseries[0].data.instant.details.relative_humidity }}</p>
    </div>



<script>
export default {
  props: ['weatherData', 'placeName', 'searchQuery'],
<script>
async function fetchData() {
      try {
        const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${$selectedCoordinates.lat}&lon=${$selectedCoordinates.lng}`);

        if (response.ok) {
          const data = await response.json();
          $temperature = data.properties.timeseries[0].data.instant.details.air_temperature;
          $windSpeed = data.properties.timeseries[0].data.instant.details.wind_speed;
          return data;
        } else {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
      } catch (error) {
        throw error;
      }
    }
</script>
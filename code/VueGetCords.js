export async function getCoordinatesFromName(locationName) {
    console.log('Fetching coordinates for:', locationName);
    const baseUrl = 'https://nominatim.openstreetmap.org/search';
      try {
        const response = await Axios.get(baseUrl, {
          params: {
            q: locationName,
            format: 'json',
            limit: 1
          }
        });
        if (response.data && response.data.length > 0) {
          const data = response.data[0];
          return { lat: data.lat, lon: data.lon };
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
      return null;
}
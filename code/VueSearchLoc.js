export async function searchLocationByName(locationName) {
    const coordinates = await getCoordinatesFromName(locationName);
    if (coordinates) {
        // Return the fetched data here
        return await fetchWeatherData(coordinates.lat, coordinates.lon);
    } else {
        console.error("Couldn't get coordinates for the provided location.");
        return null;
    }
  }
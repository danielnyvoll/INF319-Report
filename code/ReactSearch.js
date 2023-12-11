const search = async () => {
    setIsLoading(true);
  
    const element = document.getElementsByClassName("cityInput");

    if (element[0].value === "") {
      setIsLoading(false);
      return 0;
    }
    
    // Get coordinates using Mapbox's Geocoding
    let geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${element[0].value}.json?access_token=${mapboxToken}&limit=1`;


    try {
      let geoResponse = await fetch(geocodeUrl);
      let geoData = await geoResponse.json();
      const [lon, lat] = geoData.features[0].geometry.coordinates;
      
      setLongitude(lon);
      setLatitude(lat);
    
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Metric&appid=${openweathermap_api_}`;
    
      let response = await fetch(url);
      let data = await response.json();
    
      console.log(data);
    
      setTemperature(Math.floor(data.main.temp) + "°c");
      setLocation(data.name);
      setHumidity(data.main.humidity + "%");
      setWindSpeed(Math.floor(data.wind.speed) + " km/h");
      setDescription(data.weather[0].description);
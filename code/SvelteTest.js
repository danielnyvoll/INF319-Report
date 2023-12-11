import { it, expect } from 'vitest';
import { geocodeTextToLatLon, celciusTemp, fetchWeatherData } from './Weather';
it('geocodes a location name to latitude and longitude', async () => {
    
    const { lat, lon } = await geocodeTextToLatLon('New York');
  
    expect(lat).toBeCloseTo(40.7128, 2);
    expect(lon).toBeCloseTo(-74.0060, 2);
  });
import { tempConverter, getCoordinatesFromName, fetchWeatherData  } from '../services/weatherAPI'

describe('getCoordinatesFromName', () => {
    it('converts a location name to latitude and longitude', async () => {
        const locationName = 'New York';
        const expectedLat = 40.7128;
        const expectedLon = -74.0060;
  
        const { lat, lon } = await getCoordinatesFromName(locationName);
  
  
        expect(lat*1).toBeCloseTo(expectedLat, 2); 
        expect(lon*1).toBeCloseTo(expectedLon, 2); 
    });
import { render, screen } from '@testing-library/react';
import App from './App';
import WeatherComponent from './WeatherComponent';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

jest.mock('./GeocodingUtils', () => ({
    geocodeTextToLatLon: async (locationName) => {
      if (locationName === 'New York') {
        return { lat: 40.7128, lon: -74.0060 };
      } else {
        throw new Error('Invalid location');
      }
    },
  }));
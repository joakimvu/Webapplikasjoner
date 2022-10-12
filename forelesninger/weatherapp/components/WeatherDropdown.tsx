import React from 'react'
import { Place, WeatherData } from '../types'

type WeatherDropDownProps = {
  weatherData?: WeatherData
  currentLocation: Place
  handleUpdateWeather: (place: Place) => void
}

export default function WeatherDropdown({
  weatherData,
  currentLocation,
  handleUpdateWeather,
}: WeatherDropDownProps) {
  if (!weatherData) return null

  return (
    <select
      className="weather"
      data-testid="weather-dropdown"
      value={currentLocation ?? ''}
      onChange={(event) => handleUpdateWeather(event.target.value as Place)}
    >
      <option value="" disabled>
        Velg sted
      </option>
      {weatherData?.map((data) => (
        <option key={data.id} value={data.place.toLowerCase()}>
          {data.place}
        </option>
      ))}
    </select>
  )
}

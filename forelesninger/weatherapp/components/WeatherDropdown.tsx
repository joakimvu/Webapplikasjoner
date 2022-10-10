import React from 'react'

export default function WeatherDropdown() {
  return (
    <select className="weather" data-testid="weather-dropdown" value="">
      <option value="" disabled>
        Velg sted
      </option>
    </select>
  )
}

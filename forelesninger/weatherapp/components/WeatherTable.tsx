import React from 'react'

export default function WeatherTable() {
  return (
    <section className="weather-table">
      <h2>Oversikt</h2>
      <ul>
        <li>
          <div>
            <span>Plass</span>
            <span>Vær</span>
            <span>Temperatur</span>
          </div>
          <button type="button">Velg Sted</button>
        </li>
      </ul>
    </section>
  )
}

import React from 'react'
import { data as weatherData } from '../data'
import { Place } from '../types'

export default function WeatherTable({ currentLocation }: Place) {
  return (
    <section className="weather-table">
      <h2>Oversikt</h2>
      <ul>
        <li>
          <div>
            <span>
              <h3>Plass</h3>
            </span>
            <span>
              <h3>Vær</h3>
            </span>
            <span>
              <h3>Temperatur</h3>
            </span>
          </div>
        </li>
        {weatherData?.map((data) => (
          <li key={data?.id}>
            <div>
              <span>{data.place}</span>
              <span>{data.weather}</span>
              <span>{data.temperature}</span>
            </div>
            {currentLocation !== data.place.toLowerCase() ? (
              <button type="button">Velg Sted</button>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}

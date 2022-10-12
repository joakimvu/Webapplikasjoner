export type Place = 'Fredrikstad' | 'Halden' | 'Moss' | 'Oslo' | 'Sarpsborg'
export type Weather = 'Sol' | 'Regn' | 'Snø' | 'Overskyet'
export type WeatherData = {
  id: string
  place: Place
  weather: Weather
  temperature: number
}

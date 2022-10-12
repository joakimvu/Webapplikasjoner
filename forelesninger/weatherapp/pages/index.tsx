import type { NextPage } from 'next'
import Footer from '../components/Footer'
import StaticText from '../components/StaticText'
import Title from '../components/Title'
import WeatherDropdown from '../components/WeatherDropdown'
import WeatherTable from '../components/WeatherTable'
import { data } from '../data'
import useWeather from '../hooks/useWeather'

const Home: NextPage = () => {
  const { weatherData, currentLocation, handleUpdateWeather } = useWeather(data)

  return (
    <>
      <Title title={'Velkommen til oversikten over været'} />
      <StaticText />
      <WeatherDropdown
        weatherData={weatherData}
        currentLocation={currentLocation}
        handleUpdateWeather={handleUpdateWeather}
      />
      <WeatherTable currentLocation={currentLocation} />
    </>
  )
}

export default Home

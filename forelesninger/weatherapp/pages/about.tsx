import type { NextPage } from 'next'
import Footer from '../components/Footer'
import StaticText from '../components/StaticText'
import Title from '../components/Title'
import WeatherDropdown from '../components/WeatherDropdown'
import WeatherTable from '../components/WeatherTable'

const About: NextPage = () => {
  return (
    <>
      <Title title={'Om oss'} />
      <StaticText />
      <WeatherDropdown />
    </>
  )
}

export default About

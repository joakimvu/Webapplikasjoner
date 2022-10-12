import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Form from '../components/Form'
import StaticText from '../components/StaticText'
import Title from '../components/Title'
import WeatherDropdown from '../components/WeatherDropdown'
import WeatherTable from '../components/WeatherTable'

const Contact: NextPage = () => {
  return (
    <>
      <Title title={'Kontakt Oss'} />
      <StaticText />
      <Form />
    </>
  )
}

export default Contact

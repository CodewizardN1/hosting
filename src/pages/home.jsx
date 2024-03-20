import React from 'react'
import { Main } from '../components/main'
import { Whyus } from '../components/whyus'
import { Services } from '../components/services'
import { Panel } from '../components/panel'
import { Plan } from '../components/plan'
import { Contact } from '../components/contact'

const Home = () => {
  return (
    <div>
      <Main />
      <Whyus/>
      <Services />
      <Panel />
      <Plan />
      <Contact />
    </div>
  )
}

export default Home

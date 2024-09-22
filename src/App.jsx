import { useState } from 'react'
import Nav from './components/Nav'
import Landing from './components/Landing'
import C from './components/C'
import Feature from './components/Feature'
import Pihlosopy from './components/Pihlosopy'
import Development from './components/Development'
import CursorFollower from './components/CursorFollower'
import Newday from './components/Newday'
import Lastdrag from './components/Lastdrag'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <CursorFollower/>
    <Nav/>
    <Landing/>
    <C/>
    <Feature/>
    <Pihlosopy/>
    <Development/>
    <Newday title="New Day —&nbsp;New Inspo" w="min-w-[140vw]"/>
    <Lastdrag/>
    <Footer/>
    </>
  )
}

export default App






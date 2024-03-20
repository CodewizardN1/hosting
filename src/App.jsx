
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/header'
import Home from './pages/home'
import { Footer } from './components/footer'
import { Partner } from './pages/partner'
import { Contact } from './pages/Contact'
import { Command } from './pages/Command'
import { Plans } from './pages/Plans'
import { Error404 } from './pages/error404'
import { Question } from './pages/question'

function App() {


  return (
    <div className='w-[100%]'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Partnership' element={<Partner />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Command' element={<Command />} />
        <Route path='/Plans' element={<Plans />} />
        <Route path='*' element={<Error404 />} />
        <Route path='Question' element={<Question />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App

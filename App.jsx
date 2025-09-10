import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About_us from './pages/About_us'
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about_us' element={<About_us/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

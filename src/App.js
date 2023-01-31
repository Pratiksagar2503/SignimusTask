import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Input from './components/Input'
import Show from './components/Show'
import './App.css'
const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
  <Route exact path='/' element={<Show/>} />
  <Route exact path='/input' element={<Input/>} />
</Routes>
</BrowserRouter>
</>  )
}

export default App
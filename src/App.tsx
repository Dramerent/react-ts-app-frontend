// import { useState } from 'react'
import './App.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from './header/Header'
import { MainBody } from './body/mainBody/MainBody'
import { FullCard } from './body/fullCard/FullCard'
import { CreateCardForm } from './body/createCardForm/CreateCardForm'
export default function App() {
  return (
    <>
      <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path = "/" element = {<MainBody />}></Route>
          <Route path = "/fullCard" element = {<FullCard />}></Route>
          <Route path='/createCardForm' element = {<CreateCardForm />}></Route>
        </Routes>
      </>
      </BrowserRouter>
    </>
     
  )
}



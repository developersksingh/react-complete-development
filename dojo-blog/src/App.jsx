import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Web from './Web'
import Contact from './Contact'
import { Routes, Route } from 'react-router-dom'
import ProductGallery from './ProductGallery'
import BlogDetails from './BlogDetails'
function App () {
  const title = 'Welcome to the my new react blog.'
  const link = 'www.google.com'

  return (
    <>
      <div className='container'>
        <h1
          className='text-success'
          style={{ color: 'blue', padding: '4px', fontSize: '18x' }}
        >
          {title}{' '}
        </h1>
        <Navbar />
        <Routes>
          <Route path='/' element={<Web />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/gallery' element={<ProductGallery />} />
          <Route path='/blog-details/:id' element={<BlogDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App

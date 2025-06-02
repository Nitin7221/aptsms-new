import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Routing from './lib/routing-util.jsx'


function App() {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <Header />
      <Routing/>
      <div className='mt-auto'>
        <Footer></Footer>
      </div>
      </div>
  )
}

export default App
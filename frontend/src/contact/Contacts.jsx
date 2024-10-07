import  {} from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
// import Contact from '../components/Contact'
// import Footer from '../components/Footer'

function Contacts() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <Contact/>
      </div>
    </>
  )
}

export default Contacts

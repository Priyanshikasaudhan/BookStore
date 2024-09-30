import {} from 'react'
import Navbar from '../components/Navbar'
import Coures from '../components/Coures'
import Footer from '../components/Footer'

function Courses() {
  return (
    <>
     <Navbar/>
     <div className='min-h-screen'>
        <Coures/>
     </div>
     <Footer/>
    </>
  )
}

export default Courses

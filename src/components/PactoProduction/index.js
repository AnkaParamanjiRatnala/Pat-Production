import Header from './Header'
import About from './About'
import Home from './Home'
import Process from './Process'
import Testimonials from './Testimonials'
import ContactUs from './ContactUs'

import './index.css'

const PactoProduction = () => {
  return (
    <>
      <div className="bg-container">
        <Header />
        <Home />
        <About />
        <Process />
        <Testimonials />
        <ContactUs />
      </div>
    </>
  )
}
export default PactoProduction

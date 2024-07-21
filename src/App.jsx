import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Certification from "./components/Certification";
const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <Certification />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

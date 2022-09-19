import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage'
import Skills from './pages/MySkills'
import Portfolio from './pages/Portfolio'
import { AppNavigate } from './routes/AppNavigate'


function App() {

  return (
    <div className="App bg-[#F5F9FF]">
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
      <section id="aboutMe">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="studys">
        <AppNavigate />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer/>
    </div>
  )
}

export default App

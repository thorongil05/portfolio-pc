import cv from '../resources/cv.json'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Competencies from './components/Competencies.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import EducationLanguages from './components/EducationLanguages.jsx'
import Footer from './components/Footer.jsx'

const contact = {
  phone: import.meta.env.VITE_CONTACT_PHONE || cv.personal.phone,
  email: import.meta.env.VITE_CONTACT_EMAIL || cv.personal.email,
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero personal={cv.personal} contact={contact} />
      <About profile={cv.profile} />
      <Competencies competencies={cv.competencies} />
      <Experience experience={cv.experience} />
      <Certifications certifications={cv.certifications} />
      <EducationLanguages education={cv.education} languages={cv.languages} />
      <Footer personal={cv.personal} contact={contact} />
    </>
  )
}

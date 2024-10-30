import './assets/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Brands from './components/Brands'
import AppFeatures from './components/AppFeatures'


function App() {

  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Brands/>
      <AppFeatures/>
    </main>
    <Footer/>
    </>
  )
}

export default App

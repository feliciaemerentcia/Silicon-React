import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import ContactPage from './Pages/ContactPage'
import FormValidationProvider from './context/FormValidationContext'

function App() {

  return (
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ContactPage' element={<ContactPage />} />
          </Routes>
        </main>
        <Footer/>   
      </BrowserRouter>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import { Container } from 'react-bootstrap'
import MyHeading from './components/MyHeading'

function App() {
  return (
    <div className='App'>
      <header>
        <MyNavbar logoPath={'./assets/images/logo.png'} isFluid={true} />
      </header>
      <main data-bs-theme='dark' bg='dark'>
        <Container fluid>
          <MyHeading />
        </Container>
      </main>
    </div>
  )
}

export default App

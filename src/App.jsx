import './App.css'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom' //eslint-disable-line
import Aurora from './componentes/Aurora'
import Beach from './componentes/Beach'
import Forest from './componentes/Forest'
import Lake from './componentes/Lake'
import Milky from './componentes/Milky'
import Thunder from './componentes/Thunder'
import Navegacion from './componentes/Navegacion'
import Sunset from './componentes/Sunset'

function App() {


  return (
    <>
      <Router>
        <h1 className='titulo text-center mb-3 mt-3'>Galeria de Paisajes</h1>
        <Routes>
        <Route path='/Aurora' Component={Aurora}/>
          <Route path='/Beach' Component={Beach}/>
          <Route path='/Forest' Component={Forest}/>
          <Route path='/Lake' Component={Lake}/>
          <Route path='/Milky' Component={Milky}/>
          <Route path='/Thunder' Component={Thunder}/>     
          <Route path='/Sunset' Component={Sunset}/>     
        </Routes>
        <Navegacion/> 
      </Router>
    </>
  )
}

export default App

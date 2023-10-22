import { Link } from 'react-router-dom'
import Aurora from '../imagenes/aurorajpg.jpg'
import Beach from '../imagenes/beach.jpg'
import Forest from '../imagenes/forest.jpg'
import Lake from '../imagenes/lake.jpg'
import Milky from '../imagenes/milky.jpg'
import Thunder from '../imagenes/thunder.jpg'
import Sunset from '../imagenes/sunset.jpg'
import Nature from '../imagenes/nature.jpg'

const Navegacion = () => {
  return (
    <div className='container mt-3 mb-3 padre'>
        <Link to='/Aurora' className='links'>
        <figure>
            <img src={Aurora} alt ="" className='tamaño-img'/>
            <figcaption>Aurora</figcaption>
        </figure>
        </Link>

        <Link to='/Beach' className='links'>
        <figure>
            <img src={Beach} alt ="" className='tamaño-img'/>
            <figcaption>Beach</figcaption>
        </figure>
        </Link>
        
        <Link to='/Forest' className='links'>
        <figure>
            <img src={Forest} alt ="" className='tamaño-img'/>
            <figcaption>Forest</figcaption>
        </figure>
        </Link>
        
        <Link to='/Lake' className='links'> 
        <figure>
            <img src={Lake} alt ="" className='tamaño-img'/>
            <figcaption>Lake</figcaption>
        </figure>
        </Link>
        
        <Link to='/Milky' className='links'>
        <figure>
            <img src={Milky} alt ="" className='tamaño-img'/>
            <figcaption>Milky</figcaption>
        </figure>
        </Link>
        
        <Link to='/Thunder' className='links'>
        <figure>
            <img src={Thunder} alt ="" className='tamaño-img'/>
            <figcaption>Thunder</figcaption>
        </figure>
        </Link>

        <Link to='/Sunset' className='links'>
        <figure>
            <img src={Sunset} alt ="" className='tamaño-img'/>
            <figcaption>Sunset</figcaption>
        </figure>
        </Link>
        
        <Link to='/Nature' className='links'>
        <figure>
            <img src={Nature} alt ="" className='tamaño-img'/>
            <figcaption>Nature</figcaption>
        </figure>
        </Link>
        
    </div>
  )
}

export default Navegacion

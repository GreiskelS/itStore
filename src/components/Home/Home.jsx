import React from 'react'
import './css/Home.css'
import Navbarhome from '../Navbar/Navbarhome'
import Cards from '../Cardspopulares/Cards'
import Cardsgift from '../Cardsgift/Cardsgift'
import Cardscreators from '../Cardscreators/Cardscreators'
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <div id='homepage'>

      <header>
        <Navbarhome />
      </header>
      <hr />
      <div className='fontsellers'>
        <h2 className='fontsellers'>Encuentra cosas que te enamoren. Apoya a vendedores independientes. Solo en Etsy.</h2>
      </div>
      <main id='landing'>
        <section className='sectionsellers'>
    
            <div className='sellers'>
              <a href="/" ><img className='sellers' src="src/assets/DSC08400.JPG" alt="foto de la sección" />calendarios</a>
            </div>
            <div className='sellers'>
              <a href="/" ><img className='sellers' src="src/assets/DSC08400.JPG" alt="foto de la sección" />calendarios</a>
            </div>
            <div className='sellers'>
              <a href="/" ><img className='sellers' src="src/assets/DSC08400.JPG" alt="foto de la sección" />calendarios</a>
            </div>
            <div className='sellers'>
              <a href="/" ><img className='sellers' src="src/assets/DSC08400.JPG" alt="foto de la sección" />calendarios</a>
            </div>
            <div className='sellers'>
              <a href="/" ><img className='sellers' src="src/assets/DSC08400.JPG" alt="foto de la sección" />calendarios</a>
            </div>
            <div className='sellers'>
              <a href="/" ><img className='sellers' src="src/assets/DSC08400.JPG" alt="foto de la sección" />calendarios</a>
            </div>

        </section>
      </main>
      <section className='sectionpopulares'>
        <h2 className='fontsellers'>Regalos populares en estos momentos</h2>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </section>
      <section className='sectiongift'>
      <h2 className='fontsellers'>Visita nuestras categorías populares de regalos</h2>
        <Cardsgift />
        <Cardsgift />
        <Cardsgift />
        <Cardsgift />
        <Cardsgift />
        <Cardsgift />
      </section>
      <h4 className='fontsellers'>¿Buscas comprar algo en tu país? Lo tienes en Etsy.</h4>
      
      <h2 className='fontsellers'><strong>Descubre tiendas de España</strong></h2>
      
      <Button variant="light" className='buttoncreadores'>comprar a creadores locales</Button>{' '}
      
      <section className='sectioncreators'>
      <Cardscreators />
      <Cardscreators />
      <Cardscreators />
      <Cardscreators />
      </section>
     
    </div>
  )
}

export default Home
import React from 'react';
import './css/Home.css'
import Navbarhome from '../Navbar/Navbarhome'
import Cards from '../Cardspopulares/Cards'
import Cardsgift from '../Cardsgift/Cardsgift'
import Cardscreators from '../Cardscreators/Cardscreators'
import Button from 'react-bootstrap/Button';
import Sellerscard from '../Sellers/Sellerscard'

const Home = () => {
  return (
    <div id='homepage'>
      <header>
        <Navbarhome />
      </header>

      <h2 className='fontsellers'>Encuentra cosas que te enamoren. Apoya a vendedores independientes. Solo en Etsy.</h2>
      <section className='sectionsellers'>
        <Sellerscard />
        <Sellerscard />
        <Sellerscard />
        <Sellerscard />
        <Sellerscard />
        <Sellerscard />
      </section>

      <h2 className='fontpopulares'>Regalos populares en estos momentos</h2>
      <section className='sectionpopulares'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </section>
      
      <h2 className='fontgift'>Visita nuestras categorías populares de regalos</h2>
      <section className='sectiongift'>
        <Cardsgift />
        <Cardsgift />
        <Cardsgift />
        <Cardsgift />
        <Cardsgift />
        <Cardsgift />
      </section>
      
      <h4 className='fontcreator'>¿Buscas comprar algo en tu país? Lo tienes en Etsy.</h4>

      <h2 className='fontcreator'><strong>Descubre tiendas de España</strong></h2>

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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/Cards.css'
import {urlpopulars, buttonlike} from '../Assets/Assets';

function Cards() {
  
  return (
    <div className='cardpopulares'>
      <a href="/">
        <Card className='popularesbody'>
          <Card.Img variant="top" src={urlpopulars} /><Card.Img/>
          <Button variant="light" id='buttonlike'><img src={buttonlike} alt="Likesave" /></Button>{''}
          <Card.Body className='popularbody'>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default Cards;
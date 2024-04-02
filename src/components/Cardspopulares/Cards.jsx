import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/Cards.css'
import Links from '../FetchLink/Links';

function Cards() {

  const urlpopulares = Links({ populares: 1 });

  return (
    <div className='cardpopulares'>
      <a href="/">
        <Card className='popularesbody'>
          <Card.Img variant="top" src="src/assets/DSC08400.JPG" /><Card.Img/>
          <Button variant="light" id='buttonlike'><img src="src/assets/like.png" alt="Like or save" /></Button>{''}
          <Card.Body>
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
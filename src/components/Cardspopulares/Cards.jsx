import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/Cards.css'

function Cards() {
  return (
    <div className='cardpopulares'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/DSC08400.JPG" />
      <Button variant="light" id='buttonlike'><img src="src/assets/like.png" alt="Like or save" /></Button>{''}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example  
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;
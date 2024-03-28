import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/Cardscreators.css';

function Cardscreators() {
  return (
    <div className='cardcreators'>
    <Card id="bodylen">
      <Card.Img variant="top" src="src/assets/DSC08400.JPG" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build
        </Card.Text>
        <Button variant="light" id='buttonlike'><img src="src/assets/like.png" alt="Like or save" /></Button>{''}
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cardscreators;
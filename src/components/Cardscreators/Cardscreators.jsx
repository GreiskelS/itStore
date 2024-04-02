import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/Cardscreators.css';

function Cardscreators() {
  return (
    <div className='cardcreators'>
      <a href="/">
    <Card id="bodylen">
      <Card.Img variant="top" className='creatorsimg' src="src/assets/DSC08400.JPG" />
      <Card.Body className='creatorsbody'>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build
        </Card.Text>
        <Button variant="light" id='buttonlike'><img src="src/assets/like.png" alt="Like or save" /></Button>{''}
      </Card.Body>
    </Card>
    </a>
    </div>
  );
}

export default Cardscreators;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/Cardgift.css'

function Cardsgift() {
  return (
    <div className='cardgift'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/DSC08400.JPG" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cardsgift;
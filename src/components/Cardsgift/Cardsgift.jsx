import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/Cardgift.css'

function Cardsgift() {
  return (
    <div className='cardgift'>
      <a href="/">
        <Card className='giftbody'>
          <Card.Img variant="top" src="src/assets/DSC08400.JPG" />
          <Card.Body >
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default Cardsgift;
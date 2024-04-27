import Card from 'react-bootstrap/Card';
import './css/Cardgift.css'

function Cardsgift() {
  const urlgift = "https://github.com/GreiskelS/Assets.proyects/blob/main/assets/DSC08400.JPG?raw=true";

  return (
    <div className='cardgift'>
      <a href="/">
        <Card className='giftbody'>
          <Card.Img variant="top" src={urlgift} alt="Likesave"/>
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
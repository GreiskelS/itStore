import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/Cards.css'

function Cards() {
  const urlpopulars = "https://github.com/GreiskelS/Assets.proyects/blob/main/assets/DSC08400.JPG?raw=true";
  const buttonlike = "src/assets/like.png";

  return (
    <div className='cardpopulares'>
      <a href="/">
        <Card className='popularesbody'>
          <Card.Img variant="top" src={urlpopulars} /><Card.Img/>
          <Button variant="light" id='buttonlike'><img src={buttonlike} alt="Like or save" /></Button>{''}
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
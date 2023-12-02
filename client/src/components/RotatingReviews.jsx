import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import ReviewImg from '../assets/ReviewImg.png';

function RotatingReview() {
  const reviews = [
    {
      id: 1,
      stars: '⭐️⭐️⭐️⭐️⭐️',
      title: 'why wont you straiten up',
      name: 'jp',
      description: 'fasdfsdaf sadfsdafsadfsdafsaf sdafdsafsdfa sdfasfd sfsadfsdfs dfsadfsf fasdfsdaf sadfsdafsadfsdafsaf sdafdsafsdfa sdfasfd sfsadfsdfs dfsadfsf fasdfsdaf sadfsdafsadfsdafsaf sdafdsafsdfa sdfasfd sfsadfsdfs dfsadfsf'
    },{
      id: 2,
      stars: '⭐️⭐️⭐️⭐️⭐️',
      title: 'Great',
      name: 'jp',
      description: 'fasdfsdaf sadfsdafsadfsdafsaf sdafdsafsdfa sdfasfd sfsadfsdfs dfsadfsf fasdfsdaf sadfsdafsadfsdafsaf sdafdsafsdfa sdfasfd sfsadfsdfs dfsadfsf fasdfsdaf sadfsdafsadfsdafsaf sdafdsafsdfa sdfasfd sfsadfsdfs dfsadfsf'
    },{
      id: 3,
      stars: '⭐️⭐️⭐️⭐️⭐️',
      title: 'Great',
      name: 'jp',
      description: 'fasdfsdaf sadfsdafsadfsdafsaf sdafdsafsdfa sdfasfd sfsadfsdfs dfsadfsf fasdfsdaf sadfsdafsadfsdafsaf sdafdsafsdfa sdfasfd sfsadfsdfs dfsadfsf fasdfsdaf sadfsdafsadfsdafsaf sdafdsafsdfa sdfasfd sfsadfsdfs dfsadfsf'
    },
  ]
  return (
    <Carousel fade className='review-carousel-container'>
      {reviews.map(({id, stars, title, name, description}) => (
        <Carousel.Item interval={1000} key={id}>
          <Image src={ReviewImg} className='review-carousel-img'/> 
          <Carousel.Caption>
            <p className='review-carousel-stars'>{stars}</p>
            <h3 className='review-carousel-title'>{title}</h3>
            <p className='review-carousel-description'>{description}</p>
            <p className='review-carousel-name'>-{name}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default RotatingReview;

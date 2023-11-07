import { Col,  Container,  ListGroup,  Row } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {  Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { removeFromFavoriteAction } from '../redux/actions';





const Favourites = () => {
  const favouriteList = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <Container>
      <Link to='/MainSearch'>return home</Link>
    <Row>
      <Col sm={12}>
       <ListGroup>
        {
           favouriteList.map((fav, i)=>(
            <ListGroup.Item key={i}>
                <Link to={`/${fav}`}>{fav}</Link>
                <Button onClick={()=>{dispatch(removeFromFavoriteAction(i))}}>Delete</Button>
            </ListGroup.Item>
           )
           )

        }
       </ListGroup>
      </Col>
     
    </Row>
    </Container>
  )
}

export default Favourites
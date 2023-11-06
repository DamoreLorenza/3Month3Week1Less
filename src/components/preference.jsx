import { Col,  ListGroup,  Row } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {  Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';





const Favourites = () => {
  const favouriteList = useSelector((state) => state.Favourites.content)
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
       <ListGroup>
        {
           favouriteList.map((fav, i)=>(
            <ListGroup.Item key={i}>
                <Link to={`/${fav}`}>{fav}</Link>
                <Button onClick={()=>{dispatch({type:'REMOVE_FROM_FAVOURITE',
            payload: i})}}>Delete</Button>
            </ListGroup.Item>
           )
           )

        }
       </ListGroup>
      </Col>
     
    </Row>
  )
}

export default Favourites
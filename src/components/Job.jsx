import { Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react';



const Job = ({ data }) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
 
  const handleClick = () => {
    setIsAdded(!isAdded);
    dispatch({ type: 'ADD_TO_FAVORITE', payload: data });
  }
 
  return(
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={6}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
      <span className='btn' onClick={handleClick}>
        {isAdded ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i>}
      </span>
    </Col>
   
  </Row>
  )
  }

export default Job

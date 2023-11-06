import { Col,  Row } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {  Button } from 'react-bootstrap'





const Preferiti = () => {
  const pref = useSelector((state) => state.pref.content)
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {pref.map((data, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_FAVORITE',
                    payload: i,
                  })
                }}
              >
                <i class="bi bi-trash3"></i>
              </Button>
              
              {data.title}
            </li>
          ))}
        </ul>
      </Col>
     
    </Row>
  )
}

export default Preferiti
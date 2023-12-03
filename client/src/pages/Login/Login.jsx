import React, {useRef} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {v4 as uuidV4} from 'uuid';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

function Login({onIdSubmit}) {

  const idRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value)
  }

  const createNewId = () => {
    onIdSubmit(uuidV4())
  }

  return (
    <div>
      <NavBar/>
      <Container className='align-items-center d-flex' style={{height: '100vh'}}>
        <Form className='w-100' onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>
              Enter Your Id
            </Form.Label>
            <Form.Control type='text' required ref={idRef} className='mb-2'>
            </Form.Control>
          </Form.Group>
          <Button type='submit' className='me-2'>
            Login
          </Button>
          <Button onClick={createNewId} variant='secondary' >
            Create A New Id
          </Button>
        </Form>
      </Container>
      <Footer/>
    </div>
  )
}

export default Login
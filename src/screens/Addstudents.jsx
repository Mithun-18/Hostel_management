import React from 'react'
import Navbarlogin from './common/Navbarlogin'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Addstudents() {
  return (
    <div>
      <Navbarlogin />
      <div className='registerContainer'>
        <div className='formContainer' >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className = "formLabel">Student Name</Form.Label>
              <Form.Control type="textfeild" placeholder="Enter name" name='student_name' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className = "formLabel">Student Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='stud_email' />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className = "formLabel">USN</Form.Label>
              <Form.Control type="text" placeholder="Enter USN" maxLength={10} minLength={10} name='usn' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className = "formLabel">Date of birth</Form.Label>
              <Form.Control type="Date of birth" placeholder="Enter DOB" name='dob' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className = "formLabel">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" name='password' />
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className = "formLabel">Student phone no</Form.Label>
              <Form.Control type="number" placeholder="Enter phoneno" name='stud_contact' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className = "formLabel">Father name</Form.Label>
              <Form.Control type="textfeild" placeholder="Enter name" name='parent_name' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className = "formLabel">parent phone no</Form.Label>
              <Form.Control type="number" placeholder="Enter phoneno" name='parent_contact' />
            </Form.Group>

            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </div>

      </div>

    </div>
  )
}

export default Addstudents
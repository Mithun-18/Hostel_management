import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import {
  ADD_STUDENT_ROUTE,
  DELETE_STUDENT_ROUTE,
  LIST_STUDENT_ROUTE,
} from "../../../constant";

function Mainbody() {
  const navigate = useNavigate();
  return (
    <div className="containercont">
      <div className="containers">
        <Card className="text-center ">
          <Card.Header>Student List</Card.Header>
          <Card.Body>
            <Card.Title>View student list</Card.Title>
            <Card.Text>See all the enrolled student for MITK hostel.</Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(LIST_STUDENT_ROUTE)}
            >
              View List
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="containers">
        <Card className="text-center ">
          <Card.Header>Add Student</Card.Header>
          <Card.Body>
            <Card.Title>Add New student</Card.Title>
            <Card.Text>Add a new student for MITK hostel facility.</Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(ADD_STUDENT_ROUTE)}
            >
              Add student
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="containers">
        <Card className="text-center ">
          <Card.Header>Delete Student</Card.Header>
          <Card.Body>
            <Card.Title>Delete existing student</Card.Title>
            <Card.Text>Remove a student form MITK hostel</Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(DELETE_STUDENT_ROUTE)}
            >
              Delete Student
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Mainbody;

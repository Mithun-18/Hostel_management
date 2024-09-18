import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../constant";

function Homepagebody() {
  const navigate = useNavigate();
  return (
    <div className="containercont">
      <div className="containers">
        <Card className="text-center ">
          <Card.Header>Student Login</Card.Header>
          <Card.Body>
            <Card.Title>student login</Card.Title>
            <Card.Text>Students need to login here for any querey.</Card.Text>
            <Button variant="primary" onClick={() => navigate(LOGIN_ROUTE)}>
              Login
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="containers">
        <Card className="text-center ">
          <Card.Header>Warden Login</Card.Header>
          <Card.Body>
            <Card.Title>Hostel warden login</Card.Title>
            <Card.Text>warden can login here.</Card.Text>
            <Button variant="primary" onClick={() => navigate(LOGIN_ROUTE)}>
              Login
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="containers">
        <Card className="text-center ">
          <Card.Header>Admin Login</Card.Header>
          <Card.Body>
            <Card.Title>Admins login</Card.Title>
            <Card.Text>Login for hostel admin from college</Card.Text>
            <Button variant="primary" onClick={() => navigate(LOGIN_ROUTE)}>
              Login
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Homepagebody;

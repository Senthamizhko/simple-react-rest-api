import React from 'react';
import { Card , Navbar} from 'react-bootstrap';

const Contacts = ({ contacts }) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                 <Navbar.Brand > Contacts List- Simple project to work with REST-API using Fetch</Navbar.Brand>
            </Navbar>
            {contacts.map((data, index) => {
                return (<div key ={index}>
                    <Card >
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Subtitle >Works at {data.company.name}</Card.Subtitle>
                            <Card.Text>
                                Email : {data.email}  <br></br>
                                Phone No: {data.phone} <br></br>
                                Website: {data.website}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>)
            })}
        </div>
    )

}

export default Contacts;


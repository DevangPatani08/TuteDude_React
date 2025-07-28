import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button } from "react-bootstrap";

export default function ReactBs() {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '40px', padding: '40px 100px'}}>
                <Button>Submit</Button>
                <Button variant="danger">Submit</Button>
                <Button variant="warning">Submit</Button>
                <Button variant="success">Submit</Button>
                <Button variant="dark">Submit</Button>
                <Button variant="light">Submit</Button>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '40px', padding: '40px 100px'}}>
                <Button variant="primary" size="lg">Submit</Button>
                <Button variant="primary" size="md">Submit</Button>
                <Button variant="primary" size="sm">Submit</Button>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '40px', padding: '40px 100px'}}>
                <Button variant="primary" size="lg" active>Submit</Button>
                <Button variant="primary" size="lg" disabled>Submit</Button>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '40px', padding: '40px 100px'}}>
                <Button variant="primary" href='https://www.google.com' target="blank">Go To Google</Button>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '40px', padding: '40px 100px'}}>
                <Alert variant="success">
                    <Alert.Heading>Go To Google</Alert.Heading>
                    <p>Click the below link to go to Google.com</p>
                    <Alert.Link href='https://www.google.com' target="blank">Click Me</Alert.Link>
                </Alert>
            </div>
        </div>
    );
};
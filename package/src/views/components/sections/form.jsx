import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const PageForm = () => {
    return (
        <div>
            <div className="spacer" id="forms-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Form</h1>
                            <h6 className="subtitle">"Discover the range of form options featured in our demos created with FormKit. Effortlessly design and integrate forms into your dream website or dashboard, streamlining the process of collecting and managing data in no time."</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <Form className="row">
                            <FormGroup className="col-md-6">
                                <Label htmlFor="name">User Name</Label>
                                <Input type="text" className="form-control" id="name" placeholder="Enter Username" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="email">Email Address</Label>
                                <Input type="email" className="form-control" id="email" placeholder="Enter email" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" className="form-control" id="password" placeholder="Password" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="confirmpwd">Confirm Password</Label>
                                <Input type="password" className="form-control" id="confirmpwd" placeholder="Confirm Password" />
                            </FormGroup>
                            <FormGroup className="col-md-12 ml-3">
                                <Input id="checkbox1" type="checkbox" />
                                <Label htmlFor="checkbox1"> Remember me </Label>
                            </FormGroup>
                            <Col md="12">
                                <Button type="submit" className="btn btn-success waves-effect waves-light m-r-10">Submit</Button>
                                <Button type="submit" className="btn btn-inverse waves-effect waves-light">Cancel</Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageForm;

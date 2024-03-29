/* eslint-disable */
import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';

const Breadcrumbs = () => {
    return (
        <div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="12" className="text-center">
                            <h1 className="title font-bold">Breadcrumbs</h1>
                            <h6 className="subtitle">"Explore the breadcrumb navigation examples we've created with BreadcrumbKit. Easily implement and customize breadcrumbs for your website or dashboard in no time, guiding users seamlessly through your content."</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <Breadcrumb className='px-3 py-2 bg-light rounded mb-3'>
                            <BreadcrumbItem active>Home</BreadcrumbItem>
                        </Breadcrumb>
                        <Breadcrumb className='px-3 py-2 bg-light rounded mb-3'>
                            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                            <BreadcrumbItem active>Library</BreadcrumbItem>
                        </Breadcrumb>
                        <Breadcrumb className='px-3 py-2 bg-light rounded mb-3'>
                            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                            <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                            <BreadcrumbItem active>Data</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Breadcrumbs;

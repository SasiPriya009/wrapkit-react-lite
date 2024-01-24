import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';

const PageTable = () => {
    return (
        <div>
            <div className="spacer" id="table-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Table</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="table-responsive">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Sasi Priya</td>
                                        <td>Rajeev</td>
                                        <td>Vamsi</td>
                                        <td><span className="label label-danger">admin</span> </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Srinivas</td>
                                        <td>Priya</td>
                                        <td>@Lohitha</td>
                                        <td><span className="label label-info">member</span> </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Ram Gopal</td>
                                        <td>Charan</td>
                                        <td>@Ratna kumari</td>
                                        <td><span className="label label-warning">developer</span> </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Padmaja</td>
                                        <td>Nikitha</td>
                                        <td>@Jawahar</td>
                                        <td><span className="label label-success">supporter</span> </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Tissy</td>
                                        <td>Gracy</td>
                                        <td>@Sahana</td>
                                        <td><span className="label label-info">member</span> </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Tharun</td>
                                        <td>Rakesh</td>
                                        <td>@Sujji</td>
                                        <td><span className="label label-success">supporter</span> </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageTable;

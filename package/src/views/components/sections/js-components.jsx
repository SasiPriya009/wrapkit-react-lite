import React, { useState } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Col
} from 'reactstrap';

import img1 from '../../../assets/images/ui/img4.jpg';
import img2 from '../../../assets/images/ui/img5.jpg';
import img3 from '../../../assets/images/ui/img6.jpg';

const items = [
    {
        src: img1,
        altText: '',
        caption: ''
    },
    {
        src: img2,
        altText: '',
        caption: ''
    },
    {
        src: img3,
        altText: '',
        caption: ''
    }
];

const JsComponents = (props) => {

    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const toggle1 = () => {
        setModal1(!modal1);
    }

    const toggle2 = () => {
        setModal2(!modal2);
    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map(item => (
        <CarouselItem
            className="custom-tag"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <img className="w-100" src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
    ));

    return (
        <div>
            <div className="spacer" id="js-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Javascript Components</h1>
                            <h6 className="subtitle">"Explore our demos built on WrapKit, showcasing a seamless integration of versatile JavaScript components. Effortlessly bring your dream website and dashboard to life in no time with these powerful and customizable elements."</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="m-b-40">
                    <Col md="6" className='d-flex flex-column'>
                        <Button type="button" onClick={toggle.bind(null)} className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">Large Modal</Button>
                        <Modal size="lg" isOpen={modal} toggle={toggle.bind(null)} className={props.className}>
                            <ModalHeader toggle={toggle.bind(null)}>Modal title</ModalHeader>
                            <ModalBody>
                            Explore a myriad of dynamic and interactive Javascript components showcased in our demos crafted with WrapKit. Revolutionize your web development experience by effortlessly incorporating these powerful components into your projects, enabling you to create your dream website or dashboard with unparalleled ease and efficiency.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle.bind(null)}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={toggle.bind(null)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                        <Button type="button" onClick={toggle1.bind(null)} className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">Medium Modal</Button>
                        <Modal size="md" isOpen={modal1} toggle={toggle1.bind(null)} className={props.className}>
                            <ModalHeader toggle={toggle1.bind(null)}>Modal title</ModalHeader>
                            <ModalBody>
                            Dive into the world of responsive and user-friendly Javascript components as demonstrated in our WrapKit demos. Crafting your dream website or dashboard is made simple with these versatile components, providing you with the tools you need to enhance user interaction and design.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle1.bind(null)}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={toggle1.bind(null)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                        <Button type="button" onClick={toggle2.bind(null)} className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">Small Modal</Button>
                        <Modal size="sm" isOpen={modal2} toggle={toggle2.bind(null)} className={props.className}>
                            <ModalHeader toggle={toggle2.bind(null)}>Modal title</ModalHeader>
                            <ModalBody>
                            Discover the simplicity and effectiveness of Javascript components in our WrapKit demos. Easily integrate these user-friendly elements into your web projects, allowing you to swiftly build your dream website or dashboard without any hassle
                            </ModalBody>
                            <ModalFooter className="justify-content-center">
                                <Button color="primary" onClick={toggle2.bind(null)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </Col>
                    <Col md="6">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next.bind(null)}
                            previous={previous.bind(null)}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex.bind(null)} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous.bind(null)} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next.bind(null)} />
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default JsComponents;

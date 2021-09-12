import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { FacebookOutlined, MessageOutlined, LinkedinOutlined } from '@ant-design/icons';

import '../pages/style.css';


class Footer extends Component {

    state = {
        open: false,
        width: window.innerWidth,
        modal20Visible: false,
        modal21Visible: false,
    };

    setModal20Visible(modal20Visible) {
        this.setState({ modal20Visible });
    };

    setModal21Visible(modal21Visible) {
        this.setState({ modal21Visible });
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }

        this.setState(newState);
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render() {



        return (


            <section className="contact_lower_div">
                <div>
                    <Modal
                        title="COPYRIGHT NOTICE"
                        centered
                        visible={this.state.modal20Visible}
                        footer={null}
                        onOk={() => this.setModal20Visible(false)}
                        onCancel={() => this.setModal20Visible(false)}
                    >

                        <p id="responsive_h7">
                            All materials contained on this site is Demo
                        </p>
                        <p id="responsive_h7">
                            Helping Hand® and the HelpingHand logo®,  are registered trademarks , and may not be reproduced without prior written permission of Author.
                        </p>
                    </Modal>

                    <Modal
                        title="DISCLAIMER"
                        centered
                        visible={this.state.modal21Visible}
                        footer={null}
                        onOk={() => this.setModal21Visible(false)}
                        onCancel={() => this.setModal21Visible(false)}

                    >
                        <p style={{ fontSize: "10px" }}>WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE CONTENTS OF THE SERVICES, INCLUDING, WITHOUT LIMITATION, CONTENT (INCLUDING, WITHOUT LIMITATION, ANY REVIEWS, RATINGS, OR FINANCIAL DATA), OR USER CONTENT. WE SHALL NOT BE SUBJECT TO LIABILITY FOR ANY DELAYS OR INTERRUPTIONS OF THE SERVICES FROM WHATEVER CAUSE. YOU AGREE THAT YOU USE CONTENT, THE SERVICES, AND USER CONTENT AT YOUR OWN RISK.</p>

                        
                    </Modal>
                </div>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                    <Navbar.Brand href="/" id="contact_photo">Helping Hands</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                            <Nav.Link href="/ " target="blank_" rel="noopener noreferrer"><LinkedinOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" id="contact_photo" />LinkedIn</Nav.Link>
                            <Nav.Link href=" /" target="blank_" rel="noopener noreferrer"><FacebookOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" id="contact_photo" />Facebook</Nav.Link>
                            <Nav.Link href="/contact" target="blank_" rel="noopener noreferrer"><MessageOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" id="contact_photo" />Message Us!</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link>Indore, India &copy; 2020 - </Nav.Link>

                            <Nav.Link href="/policy">PRIVACY POLICY </Nav.Link>
                            <Nav.Link onClick={() => this.setModal21Visible(true)}>
                                DISCLAIMER 
                            </Nav.Link>
                            <Nav.Link onClick={() => this.setModal20Visible(true)}>COPYRIGHT </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </section>



        );
    }
}

export default Footer;

import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal , Button, ModalHeader, ModalBody, FormGroup, Label, Form, Input} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Puzzle from 'react-image-puzzle';


class PuzzleComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false,
            open: false,
        };
        this.toggleNav= this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }
    openModal = () => {
        this.setState({ open: true });
    }

    closeModal = () => {
        this.setState({ open: false });
    }
    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password:" + this.password.value + " Remember: "+ this.remember.checked);
        event.preventDefault();

    }

    render() {
        return (
            <>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Recaptcha
                    </ModalHeader>
                    <ModalBody>
                    <Puzzle
                            image='https://upload.wikimedia.org/wikipedia/en/6/68/John_Coltrane_-_Blue_Train.jpg'
                        />
                    </ModalBody>
                </Modal>
            </>

        )
    }
}
export default PuzzleComponent;
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component{
state = {
    modal: false,
    title: '',
    description: ''
}
toggl = () => {
    this.setState({
        modal: !this.state.modal
    })
}
onChange = e =>{
    console.log(e);
    this.setState({
         title : e.target.value
    })
}

onChangedes = e =>{
    console.log(e);
    this.setState({
         description : e.target.value
    })
}

handleSubmit = (e) => { e.preventDefault() }

onSubmit = e =>{
    // e.preventDefault();
    const newItem = {
        title: this.state.title,
        description: this.state.description
    }
    //add item via additem action
    this.props.addItem(newItem);
    //close modal
    this.toggl()
}

    render(){
        return(
            <div><div class="btn-holder"><Button color= 'dark' onClick={this.toggl}>+ Add a sticky note</Button></div>
            <Modal isOpen={this.state.modal} toggle = {this.toggl}>
                <ModalHeader toggle = {this.toggl}> Add a new sticky note</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit} >
                        <FormGroup>
                            <Label for="item"></Label>
                            <Input type="text" name= "title" id="title" placeholder="item" value={this.title} onChange={this.onChange}></Input>
                            <br/>
                            <Input type="text" name= "description" id="description" placeholder="item des" value={this.description} onChange={this.onChangedes}></Input>
                            <Button color= 'dark' onClick={this.onSubmit}>Done</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal></div>
        );
}
}
    
    const mapStateToProps = (state) =>({
       item: state.item
    });
    export default connect(mapStateToProps, {addItem})(ItemModal);    
import React, { Component } from 'react';
import { Container, Button, ListGroupItem, ListGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';


// import { CSSTransition, TransitionGroup } from 'react-transition-group';

class ShoppingList extends Component{
    componentDidMount(){
        this.props.getItems();
    }
// shorter & readable 
delete(item){
    const data = this.state.data.filter(i => i._id !== item._id)
    this.setState({data})
  }

  onClickDelete =(_id)=>{
this.props.deleteItem(_id)
  }
    render(){
        const { items } = this.props.item;
        console.log(items);
        return(
            <Container>
            <ListGroup>
            {items.map(({ _id, title, description }) => (
            <ListGroupItem key={_id}>
                {title}
                {description}
            <Button color="danger" size="sm" onClick = {this.onClickDelete.bind(this,_id)}>&times;</Button>
            </ListGroupItem>
            ))}
            </ListGroup>
            </Container>
        );
    }
}

ShoppingList.prototypes = {
getItems: PropTypes.func.isRequired,
item: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
   item: state.item
});

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);
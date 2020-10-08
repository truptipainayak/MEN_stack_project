import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import  ItemModal from './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
     return (
       <Provider store={store}>
        <div>
        <Container>
          <AppNavbar />
          <ItemModal />
          <ShoppingList />
         </Container>
        </div>
        </Provider>
     );
  }
}

export default App;
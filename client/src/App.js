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
          <Blog/>
         </Container>
        </div>
        </Provider>
     );
  }
}

class Blog extends React.Component {
//set a local state, where we are going to save our data from API.
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const url = "http://localhost:5000/api/postsapi";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }


  render() {
    const { posts } = this.state;
    // console.log(posts);
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Sticky Blog posts</h1>
        </div>
        {posts.map((post) => (
          <div className="card" key={post._id}>
            <div className="card-header">
              {post.title}
            </div>
            <div className="card-body">
              <p className="card-text">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
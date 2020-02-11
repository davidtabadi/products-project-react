import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }


  componentDidMount() {
    axios.get('https://productsspring.herokuapp.com/')
      .then(res => this.setState(
        { products: res.data }))
    console.log(this.state.products);
  }

  render() {

    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              All PRODUCTS
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Product</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map(c =>
                  <tr>
                    <td><Link to={`show/${c.id}`}>{c.name}</Link></td>
                    <td>{c.price}</td>
                    <td>{c.description}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


export default App;

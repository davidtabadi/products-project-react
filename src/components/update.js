import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Update extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: []
        };
    }

    componentDidMount() {
        axios.get('https://productsspring.herokuapp.com/' + this.props.match.params.id)
            .then(res => {
                this.setState({ product: res.data });
                console.log(this.state.product);
            });
    }

    onChange = (e) => {
        const state = this.state.product;
        state[e.target.name] = e.target.value;
        this.setState({ product: state });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, price, description } = this.state.product;
        axios.put('https://productsspring.herokuapp.com/update/' + this.props.match.params.id, { name, price, description })
            .then(res => {
                this.props.history.push("/show/" + this.props.match.params.id);
                return res.data;
            });
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            EDIT product</h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to={`/show/${this.state.product.id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Products List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" name="name" value={this.state.product.name} onChange={this.onChange} placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Price:</label>
                                <input type="text" className="form-control" name="price" value={this.state.product.price} onChange={this.onChange} placeholder="Price" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Description:</label>
                                <input type="text" className="form-control" name="description" value={this.state.product.description} onChange={this.onChange} placeholder="Description" />
                            </div>
                            <button type="submit" className="btn btn-success">Update Product</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}



export default Update;
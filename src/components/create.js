import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Create extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            price: '',
            description: ''
        };
    }


    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        const { name, price, description } = this.state;
        axios.post('https://productsspring.herokuapp.com/add', { name, price, description })
            .then(res => {
                this.props.history.push("/")
                return res.data;
            });
    }

    render() {

        const { name, price, description } = this.state;

        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            ADD PRODUCT
            </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> PRODUCTS LIST</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="isbn">Name:</label>
                                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Price:</label>
                                <input type="text" className="form-control" name="price" value={price} onChange={this.onChange} placeholder="Price" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Description:</label>
                                <input type="text" className="form-control" name="description" value={description} onChange={this.onChange} placeholder="Description" />
                            </div>

                            <button type="submit" className="btn btn-primary">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;
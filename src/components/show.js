import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: []
        };
    }

    componentDidMount() {
        axios.get('https://productsspring.herokuapp.com/' + this.props.match.params.id)
            .then(res => {
                return this.setState({ product: res.data });
            });
    }

    delete = () => {
        console.log(this.state);
        axios.delete('https://productsspring.herokuapp.com/delete/' + this.props.match.params.id)
            .then(res => {
                this.props.history.push('/');
                console.log("product with: id:" + this.props.match.params.id + "deleted");
            });
    }


    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Product Details
            </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Products List</Link></h4>
                        <dl>
                            <dt>Name:</dt>
                            <dd>{this.state.product.name}</dd>
                            <dt>Price:</dt>
                            <dd>{this.state.product.price}</dd>
                            <dt>Description:</dt>
                            <dd>{this.state.product.description}</dd>
                        </dl>
                        <Link to={`/edit/${this.state.product.id}`} className="btn btn-success">Update</Link>&nbsp;
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div >
        );
    }

}


export default Show;
import React, { Component } from 'react'

export default class Product extends Component {
    onAddToCar = () => {
        alert(this.props.children + " - " + this.props.price)
    }
    render() {
        return (
            <div>
                
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                        <img src={this.props.image} alt={this.props.children} />
                        <div className="caption">
                            <h3>{this.props.children}</h3>
                            <p>
                                {this.props.price}
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary" onClick={this.onAddToCar}>Action</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

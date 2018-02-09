import React, { Component } from 'react';
import {connect} from 'react-redux'
class ProductEdit extends Component {
    constructor (props){
        super(props)
        const {id} = this.props.match.params

        this.state = this.props.products.find(item => item.id === id )
    }

    render() {

        (this.props.deleteProductSuccess || this.props.editProductSuccess) && this.props.history.push("/products");
        return (
            <div>
                <h1>Edit Product</h1>

                {this.state ?
                    <div className="margin-top-medium margin-horiz-large">

                        <div className="row">
                            <div className="small-12 medium-8 large-6 columns">
                                <div className="md-text-field with-floating-label">
                                    <input
                                        id="title"
                                        required
                                        type="text"
                                        value={this.state.title}
                                        className={this.state.error && "has-error"}
                                        onChange={e => this.setState({ title: e.target.value })
                                        }
                                    />
                                    <label htmlFor="title">Title</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="small-12 medium-8 large-6 columns">
                                <div className="md-text-field with-floating-label">
                                    <input
                                        id="price"
                                        required
                                        type="text"
                                        value={this.state.price}
                                        className={this.state.error && "has-error"}
                                        onChange={e => this.setState({ price: e.target.value })}
                                    />
                                    <label htmlFor="price">Price</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="small-12 medium-8 large-6 columns">
                                <div className="md-text-field with-floating-label">
                                    <input
                                        id="image"
                                        required
                                        type="text"
                                        value={this.state.image}
                                        className={this.state.error && "has-error"}
                                        onChange={e => this.setState({ image: e.target.value })}
                                    />
                                    <label htmlFor="image">Image</label>
                                </div>
                            </div>
                        </div>
                        <ul className="button-group btn-cta margin-top-large">
                            <li>
                                <button className='button btn-cta' onClick={() => {
                                        this.props.handleEditProduct(
                                            this.state.id,
                                            {title: this.state.title, price: this.state.price, image: this.state.image}
                                        )
                                }}>Update</button>
                            </li>
                            <li>
                                <button className='button btn-cta alert' onClick={ () => {
                                    this.props.handleDeleteProduct(this.state.id);
                                }}>Delete</button>
                            </li>
                        </ul>
                    </div> :
                    <div>
                        <h3>The product you are searching for cannot be found.</h3>
                    </div>
                }
            </div>

        )
    }
}


const mapStateToProps = state => {
    return{
        products: state.products,
        deleteProductSuccess: state.deleteProductSuccess,
        editProductSuccess: state.editProductSuccess
    }
}

const mapDispatchToProps = dispatch => {
    return{
        handleEditProduct(id, product){
            dispatch(editProduct(id, product));
        },
        handleDeleteProduct(id) {
            dispatch(deleteProduct(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit)
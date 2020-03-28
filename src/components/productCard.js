import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
// import { getProduct } from '../actions/productAction'

class ProductCard extends Component {
    constructor(props) {
        super(props)

        // this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            productName: '',
            retailPrice: '',
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.lastProduct !== this.props.lastProduct && this.props.lastProduct !== null) {
            const { productName, retailPrice } = this.props.lastProduct

            this.setState({
                productName: productName,
                retailPrice: retailPrice
                // phone: phone,
                // receiverAddress: receiverAddress
            })
        }
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{this.state.productName}</Card.Title>
                    <Card.Text>
                        Price: {this.state.retailPrice} VND
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    lastProduct: state.productReducer.lastProduct
})

const mapDispatchToProps = {
    // getProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)

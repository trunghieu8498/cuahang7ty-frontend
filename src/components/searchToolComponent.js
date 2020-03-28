import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { getProduct } from '../actions/productAction'

class SearchToolComponent extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            product_id: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getProduct(this.state.product_id)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Row className="justify-content-md-left">
                        <Col md="auto">
                            <Form.Label>Input: </Form.Label>
                        </Col>
                        <Col  xs lg="2">
                            <Form.Control
                                type="text"
                                name="product_id"
                                value={this.state.product_id}
                                // style={{width: '10rem'}}
                                onChange={(e) => this.changeHandler(e)} />
                        </Col>
                        <Col md="auto">
                            <Button
                                // onClick={() => this.handleSubmit()}
                                variant="primary"
                                type="submit"
                            >
                                Confirm
                    </Button>
                        </Col>
                    </Row>


                </Form.Group>
            </Form>
            // {/* </div> */ }
        )
    }
}

const mapStateToProps = (state) => ({
    // error: state.error
})

const mapDispatchToProps = {
    getProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchToolComponent)

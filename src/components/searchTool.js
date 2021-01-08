import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Form, Button, Row, Col } from 'react-bootstrap'
import { getProduct } from '../actions/productAction'
import { TextField, Button, Grid } from '@material-ui/core'

class SearchTool extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            product_id: ''
        }
        this.searchBox = React.createRef()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getProduct(this.state.product_id)
        this.setState({ product_id: '' })
        this.searchBox.current.focus()
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing='2'
                >
                    <Grid item>
                        <TextField
                            name="product_id"
                            type="text"
                            label="barcode"
                            variant="outlined"
                            value={this.state.product_id}
                            inputRef={this.searchBox}
                            autoFocus
                            onChange={(e) => this.changeHandler(e)}
                        />
                    </Grid>
                    <Grid item>
                        <Button type='submit' variant="contained" size="large" color="primary">Xác nhận</Button>
                    </Grid>
                </Grid>
            </form>
            // <Form onSubmit={this.handleSubmit}>
            //     <Form.Group>
            //         <Row className="justify-content-lg-center">
            //             <Col lg="auto">
            //                 <Form.Label>Input:</Form.Label>
            //             </Col>
            //             <Col lg="8">
            //                 <Form.Control
            //                     type="text"
            //                     name="product_id"
            //                     value={this.state.product_id}
            //                     ref={this.searchBox}
            //                     onChange={(e) => this.changeHandler(e)} />
            //             </Col>
            //             <Col lg="auto">
            //                 <Button
            //                     variant="primary"
            //                     type="submit"
            //                 >Confirm</Button>
            //             </Col>
            //         </Row>
            //     </Form.Group>
            // </Form>
        )
    }
}

const mapStateToProps = (state) => ({
    // error: state.error
})

const mapDispatchToProps = {
    getProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTool)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Button, Grid } from '@material-ui/core'
import { addNewProduct } from '../../actions/productAction'

class AddProductForm extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            barcode: '',
            productName: '',
            originPrice: '',
            retailPrice: ''
        }
        this.searchBox = React.createRef()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { barcode, productName, originPrice, retailPrice } = this.state
        this.props.addNewProduct(barcode, productName, originPrice, retailPrice)
        this.setState({
            barcode: '',
            productName: '',
            originPrice: '',
            retailPrice: ''
        })
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
                    <Grid item
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing='2'
                    >
                        <Grid item>
                            <TextField
                                name="barcode"
                                type="text"
                                label="Barcode"
                                variant="outlined"
                                value={this.state.barcode}
                                inputRef={this.searchBox}
                                autoFocus
                                onChange={(e) => this.changeHandler(e)}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="productName"
                                type="text"
                                label="Tên mặt hàng"
                                variant="outlined"
                                value={this.state.productName}
                                onChange={(e) => this.changeHandler(e)}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="originPrice"
                                type="text"
                                label="Giá nhập"
                                variant="outlined"
                                value={this.state.originPrice}
                                onChange={(e) => this.changeHandler(e)}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="retailPrice"
                                type="number"
                                label="Giá bán"
                                variant="outlined"
                                value={this.state.retailPrice}
                                onChange={(e) => this.changeHandler(e)}
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button type='submit' variant="contained" size="large" color="primary">Xác nhận</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    // TempBillDetails: state.billReducer.TempBillDetails
})

const mapDispatchToProps = {
    addNewProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm)
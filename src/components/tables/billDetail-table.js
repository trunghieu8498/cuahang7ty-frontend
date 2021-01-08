import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// import { Table, Row, Col } from 'react-bootstrap'
import SetQuantityButton from '../setQuantity-button'
import { TableContainer, TableHead, TableBody, TableCell, Table, TableRow, Paper } from '@material-ui/core'

class BillDetailTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: ''
        }
    }

    componentDidUpdate(prevProps) {
        const { TempBillDetails } = this.props
        // console.log(this.props)
        if (prevProps.TempBillDetails !== TempBillDetails && TempBillDetails !== null) {
            this.handleSum(TempBillDetails)
                .then(total => {
                    this.setState({
                        total: total
                    })
                })
        }
    }

    handleSum(TempBillDetails) {
        return new Promise(resolve => {
            let total = 0
            TempBillDetails.map(billDetail => {
                const { quantity } = billDetail
                const { retailPrice } = billDetail.Product
                total += retailPrice * quantity
            })
            resolve(total)
        })
    }

    render() {
        // const { TempBillDetails } = this.props
        // const TempBillDetails = (
        //     <Fragment>
        //         {TempBillDetails.map(billDetail => {
        //             const { product, quantity } = billDetail
        //             return (
        //                 <tr>
        //                     <td>{TempBillDetails.indexOf(billDetail) + 1}</td>
        //                     <td>{product.productName}</td>
        //                     <td>
        //                         <SetQuantityButton quantity={quantity} productName={product.productName} productIndex={TempBillDetails.indexOf(billDetail)} />
        //                     </td>
        //                     <td>{product.retailPrice}</td>
        //                     <td>{product.retailPrice * quantity}</td>
        //                     {/* <td>
        //                         <Button onClick={() => { this.handleDelete(_id) }} variant="danger">Hủy quyền admin</Button>
        //                     </td> */}
        //                 </tr>
        //             )
        //         })
        //         }
        //     </Fragment>
        // )

        return (
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>#</b></TableCell>
                                <TableCell><b>Tên hàng</b></TableCell>
                                <TableCell align="right"><b>Đơn giá</b></TableCell>
                                <TableCell align="right"><b>Số lượng</b></TableCell>
                                <TableCell align="right"><b>Thành tiền</b></TableCell>
                                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.TempBillDetails.map((row) => (
                                <TableRow key={this.props.TempBillDetails.indexOf(row)}>
                                    <TableCell >{this.props.TempBillDetails.indexOf(row) + 1}</TableCell>
                                    <TableCell >{row.Product.productName}</TableCell>
                                    <TableCell align="right">{row.Product.retailPrice}</TableCell>
                                    <TableCell align="right">
                                        <SetQuantityButton quantity={row.quantity} productName={row.Product.productName} productIndex={this.props.TempBillDetails.indexOf(row)} />
                                    </TableCell>
                                    <TableCell align="right">{row.quantity * row.Product.retailPrice}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell colSpan={3} align="right"><b>Tổng cộng</b></TableCell>
                                <TableCell align="right"><b>{this.state.total}</b></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            // <Table striped bordered hover>
            //     <thead>
            //         <tr>
            //             <th>#</th>
            //             <th>Tên sản phẩm</th>
            //             <th>Số lượng</th>
            //             <th>Đơn giá</th>
            //             <th>Thành tiền</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {TempBillDetails}
            //         <tr>
            //             <td></td>
            //             <td colSpan="3">
            //                 <b>
            //                     Tổng tiền
            //                 </b>
            //             </td>
            //             <td>
            //                 <b>
            //                     ${this.state.total}
            //                 </b>
            //             </td>
            //         </tr>
            //     </tbody>
            // </Table>
        )
    }
}

const mapStateToProps = (state) => ({
    TempBillDetails: state.billReducer.TempBillDetails
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(BillDetailTable)

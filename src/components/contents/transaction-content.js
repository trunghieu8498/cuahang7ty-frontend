import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchTool from '../searchTool'
import ProductCard from '../productCard'
import BillDetailTable from '../tables/billDetail-table'
import { Grid, Button } from '@material-ui/core'
import SetQuantityButton from '../setQuantity-button'
import SaveIcon from '@material-ui/icons/Save';
import { addBill, updateInventoryNumber, clearTempBillDetails } from '../../actions/billAction'

class TransactionContent extends Component {
    // constructor(props) {
    //     super(props)
    //     // this.state = {
    //     //     total: ''
    //     // }
    // }

    async payment(TempBillDetails) {
        this.props.addBill(TempBillDetails)
            .then(() => {
                this.props.updateInventoryNumber(TempBillDetails)
                    .then(() => {
                        this.props.clearTempBillDetails()
                    })
            })
    }

    render() {
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing='2'
                >
                    <Grid item xs>
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                            spacing='2'
                        >
                            <Grid item>
                                <SearchTool />
                            </Grid>
                            <Grid item>
                                <ProductCard />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <BillDetailTable />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SaveIcon />}
                            style={{ float: 'right', padding: '1rem', marginTop: '2rem' }}
                            onClick={e => this.payment(this.props.TempBillDetails)}
                        >
                            Thanh Toán
                        </Button>
                    </Grid>
                </Grid>
            </div>
            // <Row>
            //     <Col>
            //         <SearchTool />
            //         <ProductCard />
            //     </Col>
            //     <Col>
            //         <BillDetailTable />
            //         <Button>Thanh toán</Button>
            //     </Col>
            // </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    TempBillDetails: state.billReducer.TempBillDetails
})

const mapDispatchToProps = {
    addBill,
    updateInventoryNumber,
    clearTempBillDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionContent)

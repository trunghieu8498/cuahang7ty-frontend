import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getAllProduct } from '../../actions/productAction'
import { Grow, Button, Grid } from "@material-ui/core"
import MaterialTable, { MTableToolbar } from "material-table"
import { Link } from "react-router-dom"
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

class StorageTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            columns: [
                { title: "ID", field: "barcode" },
                { title: "Tên hàng", field: "productName" },
                { title: "Giá vốn", field: "costprice" },
            ],
            data: [],
        };
    }

    async componentWillMount() {
        let productList = await this.props.getAllProduct()
        console.log(productList)
        this.setState({
            data: productList
        })
    }

    render() {
        const table = (
            <Grow in={true}>
                <MaterialTable
                    title="DANH SÁCH HÀNG HÀNG HÓA"
                    columns={this.state.columns}
                    data={this.state.data}
                    actions={[
                        {
                            icon: 'save',
                            tooltip: 'Save User',
                            // Update: (e, rowData) => alert("You updated " + rowData.name),
                            // Delete: (e, rowData) => alert("You deleted " + rowData.name),
                            Delete: (_id) => {
                                // console.log(_id)
                                this.props.deleteGoods(_id)
                            },
                        }
                    ]}
                    components={{
                        Toolbar: props => (
                            <div style={{ backgroundColor: '#e8eaf5' }}>
                                <MTableToolbar {...props} />
                            </div>
                        ),
                        Action: props => (
                            <div>
                                {/* <UpdateGoodsModal goods_id={props.data.goods_id} /> */}
                                {/* {
                                    props.data.available ?
                                        <IconButton color="secondary">
                                            <DeleteIcon
                                                onClick={() => props.action.Delete(props.data.goods_id)}>
                                            </DeleteIcon>
                                        </IconButton> : null
                                } */}
                            </div>
                        ),
                    }} />
            </Grow>
        )
        return (
            <div>
                {table}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    productList: state.productReducer.productList
})

const mapDispatchToProps = {
    getAllProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(StorageTable)

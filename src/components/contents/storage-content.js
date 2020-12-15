import React, { Component } from 'react'
import StorageTable from '../tables/storage-table'
import { Grow, Button, Grid } from "@material-ui/core"
import { Link } from "react-router-dom"

class StorageContent extends Component {
    render() {
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start"
                    style={{ marginBottom: "1rem" }}
                >
                    <Link to="/product/add" style={{ textDecoration: "none" }}>
                        <Button variant="contained" size="small" color="primary">
                            Thêm mặt hàng
                        </Button>
                    </Link>
                </Grid>
                <StorageTable />
            </div>
        )
    }
}

export default StorageContent
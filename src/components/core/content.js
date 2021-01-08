import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import TransactionContent from '../contents/transaction-content'
import StorageContent from '../contents/storage-content'
import AddProductContent from '../contents/addProduct-content'

//Content hiển thị list dựa theo route
class Content extends Component {
    render() {
        return (
            <Switch>
                <Redirect exact from="/" to="/transaction" />
                <Route exact path="/transaction" component={TransactionContent} />
                <Route exact path="/storage" component={StorageContent} />
                <Route exact path="/product/add" component={AddProductContent} />
            </Switch>
        )
    }
}

export default Content;
import React, { Component } from 'react'
import JsBarcode from 'jsbarcode'
import Barcode from 'react-barcode'

class BarcodeComponent extends Component {


    componentDidMount() {
        var code = JsBarcode("#barcode", "alo", {
            format: "CODE39",
            width: 3,
            height: 50
        })
    }

    render() {
        return (
            <div>
                <img id="barcode"></img>
                <Barcode value="tao la barcode" />
            </div>
        )
    }
}

export default BarcodeComponent
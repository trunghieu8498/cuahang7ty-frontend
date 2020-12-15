import React, { Component } from 'react'
// import { Form, Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { changeQuantityInTempBill } from '../actions/billAction'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class SetQuantityButton extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            show: false,
            quantity: ''
        }
    }

    componentDidMount = () => {
        this.setState({ quantity: this.props.quantity })
    }

    handleClose = () => {
        this.setState({ show: false })
    }

    handleShow = () => {
        this.setState({
            show: true,
            quantity: this.props.quantity
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { productIndex, TempBillDetails } = this.props
        this.props.changeQuantityInTempBill(parseInt(this.state.quantity), productIndex, TempBillDetails)
        this.handleClose()
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={e => this.handleShow()}>
                    {this.props.quantity}
                </Button>
                <Dialog
                    open={this.state.show}
                    onClose={e => this.handleClose()}
                    // aria-labelledby="form-dialog-title"
                    >
                    <form onSubmit={this.handleSubmit}>
                        <DialogTitle >{this.props.productName}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Số lượng ban đầu: ...
                            </DialogContentText>
                            <TextField
                                name="quantity"
                                autoFocus
                                margin="dense"
                                label="Số lượng"
                                type="number"
                                fullWidth
                                onChange={e => this.changeHandler(e)}
                                value={this.state.quantity}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={e => this.handleClose()} color="primary">
                                Hủy
                        </Button>
                            <Button type='submit' color="primary">
                                Xác nhận
                        </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
            // <div>
            //     <Button onClick={() => this.handleShow()} variant="contained" type="submit">{this.props.quantity}</Button>

            //     <Modal show={this.state.show} onHide={() => this.handleClose()}>
            //         <Modal.Header closeButton>
            //             <Modal.Title>{this.props.productName}</Modal.Title>
            //         </Modal.Header>
            //         <Modal.Body>
            //             <Form onSubmit={this.handleSubmit}>
            //                 <Form.Group>
            //                     <Form.Label>Số lượng:</Form.Label>
            //                     <Form.Control
            //                         type="text"
            //                         name="quantity"
            //                         value={this.state.quantity}
            //                         onChange={(e) => this.changeHandler(e)}>
            //                     </Form.Control>
            //                 </Form.Group>
            //                 <Form.Group>
            //                     <Button type="submit">Xác nhận</Button>
            //                 </Form.Group>
            //             </Form>
            //         </Modal.Body>
            //     </Modal>
            // </div>
        )
    }
}

const mapStateToProps = (state) => ({
    TempBillDetails: state.billReducer.TempBillDetails
})

const mapDispatchToProps = {
    changeQuantityInTempBill
}

export default connect(mapStateToProps, mapDispatchToProps)(SetQuantityButton);
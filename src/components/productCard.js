import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Button, Card } from 'react-bootstrap'
import { addToTempBill } from '../actions/billAction'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class ProductCard extends Component {
    constructor(props) {
        super(props)
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            productName: '',
            retailPrice: '',
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.lastProduct !== this.props.lastProduct && this.props.lastProduct !== null) {
            const { productName, retailPrice } = this.props.lastProduct
            this.setState({
                productName: productName,
                retailPrice: retailPrice
            })
            this.props.addToTempBill(this.props.lastProduct, this.props.TempBillDetails)
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.lastProduct ?
                        <Card>
                            <CardHeader
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={this.state.productName}
                                subheader={this.state.retailPrice}
                            />
                            <CardMedia>
                                <img
                                    width='300rem'
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9RTtJH-XWEiDaKk7W6o_9SpIRd7xt7oaSv17lUn9xIuml7gV1&usqp=CAU'
                                    // src='https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/PPSSMPK25_small_storage_boxes_25_pack.jpg'
                                    alt='product' />
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {this.props.lastProduct.barcode}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                        : null
                }
            </div>
            // <div>
            //     {
            //         this.props.lastProduct ?
            //             <Card style={{ width: '18rem' }}>
            //                 <Card.Img variant="top" src="https://sonbenthanh.com/timthumb.php?src=upload/product/666434027562.png&w=400&h=350&zc=2&q=80" />
            //                 <Card.Body>
            //                     <Card.Title>{this.state.productName}</Card.Title>
            //                     <Card.Text>
            //                         Price: {this.state.retailPrice} VND
            //                 </Card.Text>
            //                     <Button variant="primary">Go somewhere</Button>
            //                 </Card.Body>
            //             </Card>
            //             : null
            //     }
            // </div>
        )
    }
}

const mapStateToProps = (state) => ({
    lastProduct: state.productReducer.lastProduct,
    TempBillDetails: state.billReducer.TempBillDetails
})

const mapDispatchToProps = {
    addToTempBill
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)

import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <div>
                {/* <p>--------------------------------------------------------------------------</p> */}
            </div>
            // <Navbar bg="dark">
            //     <Navbar.Brand href="#home">
            //         I'm just a Footer
            //         {/* <image
            //             src="../public/logo192.png"
            //             width="30"
            //             height="30"
            //             className="d-inline-block align-top"
            //             // alt="React Bootstrap logo"
            //         /> */}
            //     </Navbar.Brand>
            // </Navbar>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import {Grid,Row,Col,ListGroup,ListGroupItem,CarouselItem,Tooltip} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
var products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}];

class App extends Component {

    render() {

        return(
            <Grid>
            <Row className="show-grid">
                <Col xs={4} md={4}>
                    <ListGroup>
                        <ListGroupItem>
                            <CarouselItem>


                            </CarouselItem>
                        </ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                        <ListGroupItem>...</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col xs={12} md={8}>
                    <BootstrapTable data={products} striped hover>
                        <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                    </BootstrapTable>
                </Col>
            </Row>
            </Grid>



        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)

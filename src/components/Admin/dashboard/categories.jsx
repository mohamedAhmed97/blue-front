import React, { Component } from "react";
import NavBar from './navbar'
import axios from 'axios'
import {
    FlexboxGrid,Divider
} from 'rsuite';

import { Table } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;
class Categorey extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            load: false,

        };
    }
    componentDidMount() {
        axios.get('https://blue-e-commerce.herokuapp.com/api/categories').then((res) => {
            this.setState({ data: res.data, load: true })
        }).catch((error) => {
            console.log(error);
        });
    }
    handleChange = ({ target }) => {
        this.setState({ ...this.state, [target.name]: target.value });
    };

    submitRequest = (e) => {
        e.preventDefault();
        axios.post('https://blue-e-commerce.herokuapp.com/api/categories', this.state).then((res) => {
            var elements = this.state.data.slice();
            elements.push({ name: res.data.name, _id: res.data._id });
            this.setState({data:elements})
            if (res.status === 202) {
                alert("Done");
            }
        }).catch((error) => {
            alert(error);
        });
    }
    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <br />
                <Divider>Add Categorey</Divider>
                <FlexboxGrid justify="center">
                    <form className="form-inline" onSubmit={this.submitRequest}>
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">Name</label>
                            <input type="text" name="name" class="form-control"required id="inputPassword2" placeholder="Name" onChange={this.handleChange} />
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">add</button>
                    </form>
                </FlexboxGrid>
                <Divider>Categories</Divider>
                {this.state.load ?

                    <Table
                        height={400}
                        data={this.state.data}
                        onRowClick={data => {
                            console.log(data);
                        }}
                    >
                        <Column width={400} align="center" fixed>
                            <HeaderCell>Id</HeaderCell>
                            <Cell dataKey="_id" />
                        </Column>

                        <Column width={600} fixed>
                            <HeaderCell>Name</HeaderCell>
                            <Cell dataKey="name" />
                        </Column>

                        <Column width={200} fixed="right">
                            <HeaderCell>Action</HeaderCell>

                            <Cell>
                                {rowData => {
                                    function handleAction() {
                                        alert(`sorry but it's allow to add only in the task not remove or edit but i put this for fun 😂 id:${rowData._id}`);
                                    }
                                    return (
                                        <span>
                                            <a onClick={handleAction}> Edit </a> |{' '}
                                            <a onClick={handleAction}> Remove </a>
                                        </span>
                                    );
                                }}
                            </Cell>
                        </Column>
                    </Table>
                    :
                    <FlexboxGrid justify="center">
                        <p>loading</p>
                    </FlexboxGrid>
                }
            </React.Fragment>
        );
    }
}

export default Categorey;
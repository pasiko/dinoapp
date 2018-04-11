import React, { Component } from 'react';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import axios from 'axios';
import { Link } from 'react-router-dom';

const ROOT_URL = "http://localhost:3001/";
const API_KEY = "?key=0xbeef";

class ListWarranties extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
      }

      componentDidMount() {
          axios.get(`${ROOT_URL}list${API_KEY}`).then((response) => {
            console.log(response);  
            this.setState({list: response.data});
           });    
      }
    
    render() {
        return (
            <div>
                <Link to="/new_warranty">Add new warranty</Link>

                <Table
                width={300}
                height={300}
                headerHeight={20}
                rowHeight={30}
                rowCount={this.state.list.length}
                rowGetter={({ index }) => this.state.list[index]}
            >
                <Column
                label='Nimi'
                dataKey='name'
                width={100}
                />
                <Column
                width={200}
                label='OCR'
                dataKey='ocr_text'
                />
            </Table>
        </div>
        )
    }
}

export default ListWarranties;

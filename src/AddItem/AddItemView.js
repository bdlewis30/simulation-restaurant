import React, { Component } from 'react';
import './AddItemView.css';
import axios from 'axios';

export default class AddItemView extends Component {
    constructor(){
        super();

        this.state = {
            menu_name: '',
            menu_desc: '',
            menu_price: ''
        }
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    // 70C, 44C, 104D
    addItem(){
        axios.post('/api/createMenuItem', {
            menu_name: this.state.menu_name,
            menu_desc: this.state.menu_desc,
            menu_price: this.state.menu_price
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        })
    }

    handleName(e){
        this.setState({
            menu_name: e
        })
    }

    handleDescription(e){
        this.setState({
            menu_desc: e
        })
    }

    handlePrice(e){
        this.setState({
            menu_price: e
        })
    }


    render() {
        return (
            <div className="item-container">
              <label>Name</label>
              <input type="text" className="item-inputs" onBlur={(e) => this.handleName(e.target.value)}/>
              <label>Price</label>
              <input type="text" className="item-inputs" onBlur={(e) => this.handlePrice(e.target.value)}/>
              <label>Description</label>
              <input type="text" className="item-inputs" onBlur={(e) => this.handleDescription(e.target.value)}/>
              <button className="redButton" id="cancel">Cancel</button> 
              <button className="redButton" onClick={this.addItem}>Add</button>
            </div>
        )
    }
}
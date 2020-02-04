import firebase from 'firebase/app';
import React, { Component } from 'react';
import  ItemList from "./Item_list";
import "./Items.css";
import ItemIcon  from './Item_icon';


export class Items extends Component {
    constructor(){
        super();
        this.state={
            items:[],
            filter_demand:true,
            filter_kitchen:false,
            filter_maintance:false,
            filter_office:false,
            filter_amount:false
        }
    }
    componentDidMount(){
        firebase.firestore().collection('items').get()
        .then(snapshot=>{
            let items_arr=[];
            snapshot.docs.forEach(doc=>{
                items_arr.push(doc.data());
            })
            this.setState({items:items_arr});
        })

    }
    showAll=()=>{
        this.setState({filter_demand:true});
    }
    filter=(e)=>{
        switch (e) {
            case 'kitchen':
                this.setState({filter_demand:false,
                    filter_kitchen:true,
                    filter_maintance:false,
                    filter_office:false,
                    filter_amount:false
                });
                break;
            case 'office':
                this.setState({filter_demand:false,
                    filter_kitchen:false,
                    filter_maintance:false,
                    filter_office:true,
                    filter_amount:false
                });
                break;
            case 'maintance':
                this.setState({filter_demand:false,
                    filter_kitchen:false,
                    filter_maintance:true,
                    filter_office:false,
                    filter_amount:false
                });
                break;
            case 'amount':
                this.setState({filter_demand:false,
                    filter_kitchen:false,
                    filter_maintance:false,
                    filter_office:false,
                    filter_amount:true});
                    break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <div className="Item_filter">
            
            <button onClick={this.showAll}className="filter_button">Show All</button>
            <button onClick={this.filter.bind(this,"kitchen")}className="filter_button">Kitchen</button>
            <button onClick={this.filter.bind(this,'office')}className="filter_button">Office</button>
            <button onClick={this.filter.bind(this,'maintance')}className="filter_button">Maintance</button>
            <button onClick={this.filter.bind(this,'amount')}className="filter_button">Amount: 0 </button>

        </div>
                <ItemList>
                    {this.state.filter_demand && this.state.items.map(i=>{
                            return <div  className="item_card">
                            <ItemIcon/>
                            <div className="text_area">
                            <h4>name:{i.name}</h4>
                            <p>category :{i.category}</p>
                            <p>barcode :{i.barcode}</p>
                            <p>amount: {i.amount}</p>
                            <p>price: {i.price}</p>
                            </div>
                            </div>
                    })}
                    {this.state.filter_kitchen &&  this.state.items.filter(i=> i.category==='kitchen').map(
                       i=>{return <div className="item_card">
                       <ItemIcon/>
                       <div className="text_area">
                       <h4>name:{i.name}</h4>
                       <p>category :{i.category}</p>
                       <p>barcode :{i.barcode}</p>
                       <p>amount: {i.amount}</p>
                       <p>price: {i.price}</p>
                       </div>
                       </div>} 
                    )}
                    {this.state.filter_office &&  this.state.items.filter(i=> i.category==='office').map(
                       i=>{return <div className="item_card">
                       <ItemIcon/>
                       <div className="text_area">
                       <h4>name:{i.name}</h4>
                       <p>category :{i.category}</p>
                       <p>barcode :{i.barcode}</p>
                       <p>amount: {i.amount}</p>
                       <p>price: {i.price}</p>
                       </div>
                       </div>} 
                    )}
                    {this.state.filter_maintance &&  this.state.items.filter(i=> i.category==='maintance').map(
                       i=>{return <div className="item_card">
                       <ItemIcon/>
                       <div className="text_area">
                       <h4>name:{i.name}</h4>
                       <p>category :{i.category}</p>
                       <p>barcode :{i.barcode}</p>
                       <p>amount: {i.amount}</p>
                       <p>price: {i.price}</p>
                       </div>
                       </div>} 
                    )}
                    {this.state.filter_amount &&  this.state.items.filter(i=> i.amount===0).map(
                       i=>{return <div className="item_card">
                       <ItemIcon/>
                       <div className="text_area">
                       <h4>name:{i.name}</h4>
                       <p>category :{i.category}</p>
                       <p>barcode :{i.barcode}</p>
                       <p>amount: {i.amount}</p>
                       <p>price: {i.price}</p>
                       </div>
                       </div>} 
                    )}
                </ItemList>
            </div>
        )
    }
}

export default Items

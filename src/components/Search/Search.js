import React, { Component } from 'react';
import './Search.css';
import firebase from 'firebase/app';

class Search extends Component {

    state={
        item_name_search:'',
        item_barcode_search:'',
        item_name_db_search:'',
        item_amount_db_search:0,
        item_id_db_search:''
    }
    name_handler=(e)=>{
        this.setState({item_name_search:e.target.value});
    };
    barcode_handler=(e)=>{
        this.setState({item_barcode_search:e.target.value});
    };
    search_item_db=()=>{
        if(this.state.item_name_search!==''){
        let name_query=this.state.item_name_search;
        
        
        firebase.firestore().collection('items').where('name','==',`${name_query}`).get()
        .then(snapshot=>{
            if(snapshot.empty){
                this.setState({item_name_db_search:'no matching item'});

                return;
            }
            snapshot.forEach(doc=>{
               let item=doc.data();
               console.log(item['amount'],item['name'],doc.id);
               this.setState({item_name_db_search:item['name']});
               this.setState({item_amount_db_search:item['amount']});
               this.setState({item_id_db_search:doc.id});
            })
        })
        }
        else if(this.state.item_barcode!==''){
            let barcode_query=this.state.item_barcode_search;
        
        
            firebase.firestore().collection('items').where('barcode','==',`${barcode_query}`).get()
            .then(snapshot=>{
                if(snapshot.empty){
                    this.setState({item_name_db_search:'no matching item'});
    
                    return;
                }
                snapshot.forEach(doc=>{
                   let item=doc.data();
                   console.log(item['amount'],item['name']);
                   this.setState({item_name_db_search:item['name']});
                   this.setState({item_amount_db_search:item['amount']});
                   this.setState({item_id_db_search:doc.id});
                })
            })
        }else{
            alert('fill name or barcode to search items in inventory')
        }
    }

    render() {
        return (
            <div className="box">
                <fieldset>
                    <legend>Search for an  Item </legend>
                    <input type="text" onChange={this.name_handler} name="item_query" placeholder="name "/>
                    <h3>OR</h3>
                    <input type="text" onChange={this.barcode_handler} name="item_query" placeholder="barcode"/>
                    <button onClick={this.search_item_db}>Search</button>
                        <div id='item_name'>item Name : {this.state.item_name_db_search}</div>
                        <div id='item_amount'>current Amount : {this.state.item_amount_db_search}</div>
                        <div>{null}</div>
                </fieldset>
            </div>
        )
    }
}

export default Search;

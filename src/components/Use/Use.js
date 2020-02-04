import React, { Component } from 'react';
import './Use.css';
import firebase from 'firebase/app';
import Overlay from '../../Animations/Overlay';

class Use extends Component {

    state={
        item_name:'',
        item_barcode:'',
        item_name_db:'',
        item_amount:0,
        item_amount_db:0,
        item_id_db:'',
        overlay_div_id:'hidden',
    }
    useItem=()=>{
        if(this.state.item_amount===0){
            alert('please enter amount that you use item of')
        }else if(this.state.item_amount_db <=0){
            alert('there is not enough amount to use in inventory ,please check inventory and be sure you added')
        }else{
            firebase.firestore().collection('items').doc(this.state.item_id_db)
            .update({amount:this.state.item_amount_db-this.state.item_amount})
            .then(
                this.setState({overlay_div_id:'show'})
            )
        }

        
    };
    name_handler=(e)=>{
        this.setState({item_name:e.target.value});
    };
    barcode_handler=(e)=>{
        this.setState({item_barcode:e.target.value});
    };
    amount_handler=(e)=>{
        this.setState({item_amount:e.target.value});
    }

    overlay_close=()=>{
        this.setState({overlay_div_id:'hidden'});
    }

    search_item_db=()=>{
        if(this.state.item_name!==''){
        let name_query=this.state.item_name;
        
        
        firebase.firestore().collection('items').where('name','==',`${name_query}`).get()
        .then(snapshot=>{
            if(snapshot.empty){
                this.setState({item_name_db:'no matching item'});

                return;
            }
            snapshot.forEach(doc=>{
               let item=doc.data();
               console.log(item['amount'],item['name'],doc.id);
               this.setState({item_name_db:item['name']});
               this.setState({item_amount_db:item['amount']});
               this.setState({item_id_db:doc.id});
            })
        })
        }
        else if(this.state.item_barcode!==''){
            let barcode_query=this.state.item_barcode;
        
        
            firebase.firestore().collection('items').where('barcode','==',`${barcode_query}`).get()
            .then(snapshot=>{
                if(snapshot.empty){
                    this.setState({item_name_db:'no matching item'});
    
                    return;
                }
                snapshot.forEach(doc=>{
                   let item=doc.data();
                   console.log(item['amount'],item['name']);
                   this.setState({item_name_db:item['name']});
                   this.setState({item_amount_db:item['amount']});
                   this.setState({item_id_db:doc.id});
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
                <legend>Use an Item</legend>
                <input type="text" onChange={this.name_handler} name="search_name" placeholder="search by name" id="search_name"/>
                <span>OR</span>
                <input onChange={this.barcode_handler}type="text" name="search_barcode" placeholder="search by barcode" id="search_barcode"/>
                <button onClick={this.search_item_db}>SEARCH</button>
                 <input type="text" name="item_name" defaultValue={this.state.item_name_db}/>
                <input onChange={this.amount_handler} type="number" name="amount" placeholder="amount"/>
                <button onClick={this.useItem}>USE</button>
                </fieldset>
                <Overlay text='item exit from stock ' id_css={this.state.overlay_div_id} onclick={this.overlay_close}/>
            </div>
        )
    }
}

export default Use;

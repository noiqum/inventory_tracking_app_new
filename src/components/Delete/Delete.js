import React, { Component } from 'react';
import './Delete.css';
import firebase from 'firebase/app';
import Overlay from '../../Animations/Overlay';

class Delete extends Component {

    state={
        item_name_search:'',
        item_barcode_search:'',
        item_name_db_search:'',
        item_amount_db_search:0,
        item_id_db_search:'',
        overlay_div_id:'hidden',
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

    delete_item=()=>{
       return this.state.item_name_db_search===''? alert('Search item First') : 
       firebase.firestore().collection('items').doc(this.state.item_id_db_search)
       .delete()
       .then(
           this.setState({overlay_div_id:'show'})
       ).then(this.render)
       .catch(err=>console.error(err));
    };

    overlay_close=()=>{
        this.setState({overlay_div_id:'hidden'});
    }





    render() {
        return (
            <div className="box">
                <fieldset>
                <legend>Delete an Item From Inventroy</legend>
                <input onChange={this.name_handler}type="text" name="search_name" placeholder="search by name" id="search_name"/>
                <span>OR</span>
                <input  onchange={this.barcode_handler}type="text" name="search_barcode" placeholder="search by barcode" id="search_barcode"/>
                <button onClick={this.search_item_db}>Search</button>
                <input type="text" name="item_name" value={this.state.item_name_db_search} />
                <button onClick={this.delete_item}>Delete</button>
                </fieldset>
                <Overlay onclick={this.overlay_close} text='deleted' id_css={this.state.overlay_div_id} />
            </div>
        )
    }
}

export default Delete;

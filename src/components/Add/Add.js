import React, { Component } from 'react';
import './Add.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding,faUtensils,faTools,faExpand} from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase/app";
import '../../Animations/AddAni.css';
import Overlay from '../../Animations/Overlay';




class Add extends Component {

    state={
        
            category:null,
            barcode:null,
            name:'',
            amount:0,
            price:0,
            overlay_div_id:'hidden'
    }
    
    categoryHandler=(e)=>{
        this.setState({category:e});
    };
    barcodeHandler=(e)=>{
        this.setState({barcode:e.target.value});
    };
    nameHandler=(e)=>{
        this.setState({name:e.target.value});
    };
    amountHandler=(e)=>{
        let value=e.target.value;
        let valueNum=parseInt(value);
        this.setState({amount:valueNum});
        
    };
    priceHandler=(e)=>{
        let value=e.target.value;
        let valueNum=parseFloat(value);
        this.setState({price:valueNum});
    }

    overlay_close=()=>{
        this.setState({overlay_div_id:'hidden'});
    }

    addItem=()=>{
        if(this.state.category != null && this.state.barcode != null && this.state.name !==" " && this.state.amount !==0 && this.state.price !==0){
            let itemToDatabase={...this.state};
            firebase.firestore().collection('items').add(itemToDatabase)
            .then(ref=>{
                this.setState({overlay_div_id:'show'})
                
            })
            .catch(err =>console.log(err));
        }
        else{
            alert('please , fill the form')
        }
       };

    render() {
        return (
            <div className="box">
                <fieldset>
                <legend>Add an Item</legend>
                    <form action="#" className="addForm">
                        <span>Category</span><br/>
                        <input type="radio" name="category" onChange={this.categoryHandler.bind(this,"office")} value="office" /><FontAwesomeIcon icon={faBuilding} size="1x"/> Office<br/>
                        <input type="radio" name="category" onChange={this.categoryHandler.bind(this,"kitchen")} value="kitchen"/><FontAwesomeIcon icon={faUtensils} size="1x"/>     Kitchen<br/>
                        <input type="radio" name="category" onChange={this.categoryHandler.bind(this,"maintance")} value="maintance"/><FontAwesomeIcon icon={faTools} size="1x"/>      Maintance<br/>
                        <input type="radio" name="category" onChange={this.categoryHandler.bind(this,"other")} value="other"/><FontAwesomeIcon icon={faExpand} size="1x"/>     Other<br/>
                        <input type="text" name="barcode" onChange={this.barcodeHandler} placeholder="barcode"/>
                        <input type="text" name="name"  onChange={this.nameHandler}placeholder="name"/>
                        <input type="number" name="amount" onChange={this.amountHandler} placeholder="amount" />
                        <input type="number" name="price"  onChange={this.priceHandler} placeholder="price"/>
                        <input type="button" value="Add Item"  onClick={this.addItem}/>
                    </form>
                    
                </fieldset>
                <Overlay text='item added to stock' onclick={this.overlay_close} id_css={this.state.overlay_div_id}/>
            </div>
        )
    }
}

export default Add;

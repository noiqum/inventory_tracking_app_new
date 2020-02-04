import React, { Component } from 'react';
//import Iconbar from '../Iconbar/Iconbar';
//import Container from '../Container/Container';
import './MainArea.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faSearch, faTrash} from "@fortawesome/free-solid-svg-icons";
import Add from '../Add/Add';
import Use from '../Use/Use';
import Search from '../Search/Search';
import Delete from '../Delete/Delete';
import Basket from '../../Animations/Basket';



 class MainArea extends Component {
     
    state={
        add:false,
        use:false,
        search:false,
        delete:false
    }
    clickHAndler=(pram)=>{
        switch (pram) {
            case 'add':
                this.setState({ add:true,
                    use:false,
                    search:false,
                    delete:false});
                break;
            case 'use':
                this.setState({ add:false,
                    use:true,
                    search:false,
                    delete:false});
                break;
            case 'search':
                this.setState({ add:false,
                    use:false,
                    search:true,
                    delete:false});
                
                break;
            case 'delete':
                this.setState({ add:false,
                    use:false,
                    search:false,
                    delete:true});
                
                break;
            default:
                break;
        }
    }

    

       render() {
        return (
            <div className="main">
                <div className="column">
                    <FontAwesomeIcon title="Add an Item to Inventory"fixedWidth className="icony"onClick={this.clickHAndler.bind(this,'add')}size="5x" icon={faPlus}/>
                    <FontAwesomeIcon title="Use an item from Inventory "fixedWidth className="icony"onClick={this.clickHAndler.bind(this,'use')}size="5x" icon={faMinus}/>
                    <FontAwesomeIcon title="Search an Item"fixedWidth className="icony"onClick={this.clickHAndler.bind(this,'search')}size="5x" icon={faSearch}/>
                    <FontAwesomeIcon title="Delete an item from inventory"fixedWidth className="icony"onClick={this.clickHAndler.bind(this,'delete')}size="5x" icon={faTrash}/>
                 </div>
                {this.state.add && <Add/>}
                {this.state.use && <Use/>}
                {this.state.search && <Search/>}
                {this.state.delete && <Delete/>}
                {!(this.state.add || this.state.use || this.state.search || this.state.delete) && <Basket/> }
            </div>
        )
    }
}

export default MainArea;

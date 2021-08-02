import React,{Component} from "react";
export default class Crud extends Component{
    render(){
        return(
            <ul>
                <li onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('read');
                }.bind(this)}>read</li>
                <li onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('write');
                }.bind(this)}>write</li>
                <li onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>update</li>
                <li onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)}>delete</li>
          </ul>
        )
    }
}
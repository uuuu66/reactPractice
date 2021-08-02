import React,{Component} from "react";
export default class Button extends Component{
    render(){
        return(
            <a href="/" onClick={function(e){
                alert("hi");
                 this.setState({mode:"write"});
                 this.props.onChangePage();
                 e.preventDefault();
              }.bind(this)}>{this.props.title}</a>
        );
    }
}
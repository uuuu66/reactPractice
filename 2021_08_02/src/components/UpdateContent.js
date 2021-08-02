import React,{Component} from "react"
export default class UpdateContent extends Component{
    constructor(props){
        super(props);
        this.state={
            title:this.props.title,
            data:this.props.data,
            id:this.props.selectedId
        }
        this.inputFormHandler=this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return(
            <article>
                <h2>UpdateContent</h2>
                <form action="/create_process" method="post" onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(this.state.title,this.state.data,this.state.id);
                    
                }.bind(this)}>
                    <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.inputFormHandler}></input></p>
                    <p>
                        <textarea name="data" placeholder="put data here" value={this.state.data} onChange={this.inputFormHandler}></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        )
    }
}
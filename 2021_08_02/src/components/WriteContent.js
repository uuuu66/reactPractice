import React,{Component} from "react";
export default class WriteContent extends Component{
    render(){
        return(
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post" onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(e.target.title.value,e.target.data.value);
                    
                }.bind(this)}>
                    <p><input type="text" name="title" placeholder="title"></input></p>
                    <p>
                        <textarea name="data" placeholder="put data here"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        )
    }
}
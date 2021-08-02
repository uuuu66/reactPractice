import React,{Component} from "react";
class SecondToc extends Component{
    render(){
        let data=this.props.data;
        let title=this.props.title;
        return (
            <div>
                <h1>{title}</h1>
                <article>
                    {data}
                </article>
            </div>
        )
    }
}
export default SecondToc
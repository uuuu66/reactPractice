import React,{Component} from 'react'
class TOC extends Component{
    shouldComponentUpdate(newProps,newStates){
       
            if(newProps.data===this.props.data)
            {    console.log("false"); 
                return false;
               
                }
                console.log("true");
                return true;
    }

    render(){
        console.log("menu");
        const lists=[];
        let i=0
        
        while(i<this.props.data.length){
            lists.push(<li key={this.props.data[i].id} ><a href={"/content/"+this.props.data[i].id} data-id={this.props.data[i].id}   onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}>{this.props.data[i].title}+{this.props.data[i].id}</a></li>);
            i+=1;
        }

        return(
            <nav>
              {lists}
            </nav>
        )

    }
    
}
export default TOC
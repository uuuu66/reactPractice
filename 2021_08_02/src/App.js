import Menu from './components/Menu'
import './App.css';
import React,{Component} from 'react';
import Read from './components/ReadContent';
import Write from './components/WriteContent';
import Update from './components/UpdateContent';
import Crud from './components/CRUD';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
        mode:'read',
        subject:{title:"h", sub:"hi"},
        contents:[{id:1,title:'Seconds',data:"세컨드는 두번째이다."},{id:2,title:'React',data:"리액트는 js 라이브러리이다."},{id:3,title:'APPS',data:"js를 먼저 마스터하자! "}],
        getSelectiedIndex:0,
        maxContent:3,
    }
  
}


  render(){
    
    let _title,_content,_article=null;
    let maxContent=this.state.maxContent;
    if(this.state.getSelectiedIndex!==0){
      console.log(this.state.contents,this.state.getSelectiedIndex);
      for(let i=0;i<this.state.contents.length;i++){
        if(this.state.contents[i].id===this.state.getSelectiedIndex)
        {
          console.log(this.state.getSelectiedIndex-1,i);
          _title=this.state.contents[i].title;
          _content=this.state.contents[i].data;
          break;
        }
      }  
    }
  
    
    switch(this.state.mode){
      case "read":
        
        _article= <Read title={_title} data={_content}/>
        console.log(_title,_content);
        break;
      case "write":
        _article= <Write onSubmit={function(_title,_data){
          this.setState({mode:'read',maxContent:maxContent+1,});
         const content=this.state.contents.concat(
                        {id:maxContent+1,
                        title:_title,
                        data:_data});
          this.setState({contents:content,getSelectiedIndex:maxContent+1});
          // content=Array.from(this.state.contents);
          // content.push({id:maxContent+1,
          //   title:_title,
          //   data:_data})`
      }.bind(this)} title={_title} data={_content}/>
        break;
      case "update":
        _article=<Update selectedId={this.state.getSelectiedIndex} title={_title} data={_content} onSubmit={function(_title,_data,_id){
          const contents=Array.from(this.state.contents);
          for(let i=0;i<contents.length;i++){
       
            if(contents[i].id===_id){
              contents[i]={
                id:_id,
                title:_title,
                data:_data

              };
              break;
            }
          }
            this.setState({contents:contents,mode:"read",getSelectiedIndex:_id});
        }.bind(this)  
        }></Update>
        break;
      
      default:
        _article= <Read title={_title} data={_content}/>
        break;
    } 
    return (
        <div className="App">
          <Menu data={this.state.contents} onChangePage={function(id){
            console.log(id);
            this.setState({
            getSelectiedIndex:Number(id)
            }
            );
           
          }.bind(this)}></Menu>
       
          <Crud onChangeMode={function(_mode){
            console.log(_mode)
            this.setState({
              mode:_mode
            })
           
      if(_mode==="delete"){
        if(window.confirm("really?")){
          let _contents=Array.from(this.state.contents);
          for(let i=0;i<_contents.length;i++){
            if(_contents[i].id===this.state.getSelectiedIndex){
              _contents.splice(i,1);
              console.log(_contents);
            }
          }
          this.setState({
            mode:"read",
            contents:_contents,
           
          })
        }else{
          this.setState({
            mode:"read"
          })
        }
      }
          }.bind(this)}/>
             {_article}
        </div>
      );
  }
}

export default App;

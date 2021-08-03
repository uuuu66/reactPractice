import React from 'react';
import './App.css';

function App() {
  let [funcShow,setFuncShow]=React.useState(true);
  let [classShow,setClassShow]=React.useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1> 
        <input type="button" value="remove func" onClick={
          function(){
            setFuncShow(false);
          }
        }/>
        
        <input type="button" value="remove class" onClick={
          function(){
            setClassShow(false);
          }
        }/>
        {funcShow?<FuncComp initNumber={2} date={(new Date()).toString()}></FuncComp>:null}
        {classShow?<ClassComp initNumber={2} date={(new Date()).toString()}> </ClassComp>:null}
      </header>
    </div>
  );
}
const funcStyle='color:blue';
let funcId=0;
function FuncComp(props){
  
  console.log(props);
 const numberState=React.useState(props.initNumber);
 const [date,setDate]=React.useState(props.date);
 const number=numberState[0];
 const setNumber=numberState[1];
 console.log('%cfunc=>render'+(++funcId),funcStyle);
 React.useEffect(function(){
   console.log('%cfunc=>useEffect'+(++funcId),funcStyle);
   document.title=number+' : '
   return function cleanUp(){
    document.title="cleanup"
   }
 },[number]);
 React.useEffect(function(){
  console.log('%cfunc=>useEffect'+(++funcId),funcStyle);
  document.title=date;
  return function cleanUp(){
    console.log('%cfunc=>useEffect'+(++funcId),funcStyle);
    document.title="cleanup"
  }
 })
 return(
   
    <div className="container">
      <h2>function style component</h2>
      <p>Number:{number}</p>
      <p>Date:{date}</p>
      <input type="button" value="random" onClick={
        function(){
          setNumber(Math.random());
        }
      }></input>
      <input type="button" value="date" onClick={
        function(){
          setDate((new Date()).toString());
        }
      }></input>
    </div>
  )
}
const classStyle='color:red'
class ClassComp extends React.Component{
  
  state={
    initNumber:this.props.initNumber,
    date:this.props.date,
  }
  
  componentDidMount(){
    console.log('%cclass=>ComponentDidMount',classStyle);
  }
  
  
  componentDidUpdate(){
    console.log('%cclass=>ComponentDidUpdate',classStyle);
  }
  render(){
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number:{this.state.initNumber}</p>
        <p>Date:{this.state.date}</p>
        <input type="button" value="random" onClick={function(){
          this.setState({initNumber:Math.random()});
        }.bind(this)}/>
        <input type="button" value="date" onClick={function(){
          this.setState({date:(new Date()).toString()});
        }.bind(this)}>
        </input>
      </div>
    )
  }
}
export default App;

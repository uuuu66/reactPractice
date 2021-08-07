import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter,BrowserRouter,Route,Switch,Link,NavLink,useParams} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
const contents=[
  {id:1,title:"hi",desc:"hi desc"},
  {id:2,title:"hello",desc:"hello desc"},
  {id:3,title:"bye",desc:"bye desc"},
]
function Home(){
  return (<div>
   <h2>Home</h2> Home
  </div>)
}
function Topic(){
  const params=useParams();
  const topic_id=params.topic_id;
  console.log(params);
  let selected_topic={
    title:"sorry",
    desc:"404"
  };
  for(let i=0;i<contents.length;i++){
    if(contents[i].id===Number(topic_id)){
    selected_topic=contents[i];
    break;
    }
  }
  return(
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.desc}
    </div>
  )
}
function Topics(){
 
  const lis=[];
  for(let i=0;i<contents.length;i++){
    lis.push(
      <li key={contents[i].id}><NavLink to={"/topics/"+contents[i].id}>{contents[i].title}</NavLink></li>
    )
  }
  return(
    <div>

      <h2>Topics</h2>
      {lis}
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
      </div>
  )
}
function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact</div>
  )
}
function App(){
  return (<div>
    Hello React Router Dom
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/topics">Topics</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
    <Switch>
      <Route  exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">404</Route>
      </Switch>
   
  </div>)
}
//ReactDOM.render(<HashRouter><App/></HashRouter>,document.getElementById('root'));
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form/Form";
import DivWrapper from './components/UI/DivWrapper';
import List from './components/Error/List';
import Error from './components/Error/Error';
function App() {

  const [list,updateList] = useState([]);
  const [error,updateError] = useState("");
  const formSubmit = (data)=>{
    if(!data.name.trim()){
      updateError("Name should not be Null");
      return;
    }else if(data.age<=0){
      updateError("Age should not be 0 or -ve");
      return;
    }else if(data.age>150){
      updateError("Age should not be more than 150");
      return;
    }
    updateError("");
    updateList((st)=>{
      return [...st,{...data,id:Math.random()+""}]
    })

  }
  const resetError = ()=>{
    updateError("");
  }
  const ol = list.map(l=><List key ={l.id}>{`${l.name} ${l.age}`}</List>)
  return (
    <div className="App">
      <header className="App-header">
      <DivWrapper><Form formSubmit={formSubmit}></Form></DivWrapper>
      {!error && <DivWrapper>
        {ol}
      </DivWrapper>}
      {error && <Error error={error} resetError = {resetError}/>}
      </header>
    </div>
  );
}

export default App;

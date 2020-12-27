import React,{useState} from 'react';
import SearchBar from './Components/SearchBar';
import SearchResult from './Components/SearchResult';
import './App.css';



function App() {
      const [name,setName]=useState("example");

      const getUserName=(event)=>{
      setName(event.target.value);
      console.log(name);
     }

  return (
    <div className="container-fluid center_div ">
    <div className="row  main_div text-center ">
        <div className="col-12 mt-4">
          <SearchBar    value={name} onChange={getUserName}/>
          <SearchResult name={name}/>
        </div>
    </div> 
</div> 
  );
}

export default App;

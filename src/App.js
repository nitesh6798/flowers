import './App.css';
import React from 'react';
import Flowers from './component/Flowers';
import FlowersData from './component/FlowersData'

function App() {
  return (
    <div className="App">
                <h1>About Flowers</h1>
    {FlowersData.map((values)=>{
      return(
        <>
                 <Flowers
    title={values.title}
    imgsrc={values.imgsrc}
    desc={values.desc}
    btn={values.btn}
     />
        </>
      )
    })}
    </div>
  );
}

export default App;

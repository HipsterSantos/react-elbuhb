import React from 'react';
import './style.css';

const RecursiveComponent = ({name,items}) =>{
const hasChildren = items && items.length;
return(
  <>
  {name}
  {hasChildren && items.map((item,index)=>(
    <RecursiveComponent {...item}/>
  ))
  }
  </>
)
}
export default function App() {
  const data = {
    name: 'Level 1',
    items: [{
      name: 'Level 2',
      items: [{
        name: 'Level 3'
      }]
    }]
  };
  
  return (
    <div>
      
      <RecursiveComponent {...data}/>
    </div>
  );
}

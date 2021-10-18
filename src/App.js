import React from 'react';
import './style.css';

const RecursiveComponent = ({name,items}) =>{
const hasChildren = items && items.length;
return(
  <>
  {name}
  {hasChildren && items.map((item.index)=>(
    
  ))}
  </>
)
}
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

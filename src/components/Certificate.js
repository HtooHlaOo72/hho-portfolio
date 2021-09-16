import React from 'react';

const Certificate=(props)=>{
  return (
  <div className="card rounded" style={{width:'100%'}}>
    <img src={props.src} className="card-img-top" alt={props.alt||'...'}/>
    <div className="card-body bg-dark text-light p-0 m-0">
      <h5 className="card-title">{props.title}</h5>
    </div>
  </div>
  )
}

export default Certificate;
import React from 'react'

const LikeNew = ({data}) => {
  console.log('data',data)
  // category,description,id,imageUrl,name,price
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px',textAlign:"left"}}>
    {data?.map((item,index)=>{return(
      <div key={item.id} >
        <div  >
          <img src={item.imageUrl} alt={item.id} /></div>
        <div>
        <h2>sn:{index}</h2>
        <h2>id:{item.id}</h2>
          <h2>category:{item.category}</h2>
          <h2>name:{item.name}</h2>
          <h2>price:{item.price}</h2>
          <p>description:{item.description}</p>
        </div>
      </div>
    )})}
  </div>
  )
}

export default LikeNew

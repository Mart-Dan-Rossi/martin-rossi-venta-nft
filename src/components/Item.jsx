import React from 'react'

function Item({nft}) {
  const {id, imgURL, nombre, lore, existentes, stock} = nft
  return (
    <>
    <div className="card">
      <img src={imgURL} className="card-img-top" alt={nombre}/>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className='card-text'>En stock: {stock}/{existentes}</p>
        <a href="#" className="btn btn-primary">Comprar</a>
      </div>
    </div>
    </>
  )
}

export default Item
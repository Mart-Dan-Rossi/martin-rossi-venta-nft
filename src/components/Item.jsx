import React from 'react'

function Item({nft}) {
  return (
    <>
    <div className="card">
      <img src={nft.imgURL} className="card-img-top" alt={nft.nombre}/>
      <div className="card-body">
        <h5 className="card-title">{nft.nombre}</h5>
        <p className="card-text lore">{nft.lore}</p>
        <p className='card-text'>En stock: {nft.stock}/{nft.existentes}</p>
        <a href="#" className="btn btn-primary">Comprar</a>
      </div>
    </div>
    </>
  )
}

export default Item
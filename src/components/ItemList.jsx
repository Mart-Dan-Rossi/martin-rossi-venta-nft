import React from 'react'
import Item from './Item'
import './ItemList.css'

function ItemList({arrayNfts}) {
  return (
    <div className='lista-nfts'>
        {arrayNfts?.map(nft => <Item key={nft.id} nft={nft}/>)}
    </div>
  )
}

export default ItemList
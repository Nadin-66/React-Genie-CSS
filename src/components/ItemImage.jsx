import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

function ItemImage() {
	const {data} = useContext(AppContext)
  return (
	 <div>ItemImage</div>
  )
}

export default ItemImage
import React from 'react'
import { Header } from './Item'
import Logo from './Logo'
import { Link, Redirect, useParams } from 'react-router-dom'
import { ItemFeature } from './Main'

import './AllItems.css'
import {allData } from './data'

export default function AllItems() {
  return (
    <div className="allItemsWrapper">
      <Header/>
      <h1 className="allItemsTitle">Full Product Catalog</h1>
      <Content />
    </div>
  )
}


function Content() {
  return (
    <div className="allItemsContent">
      {allData.map(item =>
        <ItemFeature item={item} key={item.id} showTitle border />
      )}
    </div>
  )
}



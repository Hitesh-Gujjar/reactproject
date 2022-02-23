import React, { useEffect, useState } from 'react'
import Product from './Product';

export default function ProductList() {

const [products,setProduct] =   useState([])


useEffect(()=> {

    fetch("https://fakestoreapi.com/products").then(y=>y.json()).then(function(respinse) {

        setProduct(respinse)
    })

}, []);


  return (
    <>  
    {
        products.map(function(value,index) {


            return (<Product myData={value}></Product>)

        })

    }

    </>
  )
}

import React, { useEffect, useState } from 'react'
import Navbar from '@components/Navbar/Navbar'
// import Card from '@components/Card/Card'
import ContainerCard from '@components/Card/ContainerCard'

const HomePage = () => {
  const [productList, setproductList] = useState([])

  useEffect(() => {
    window
      .fetch('api/avo')
      .then(response => response.json())
      .then(({data, length})=>
        {
          // type data = object;
          setproductList(data)
          console.log(data)
        }
      )
      return ()=>{

      }
  }, [])

  return (
    <div>
      <ContainerCard  products={productList}/>
    </div>
  )
}

export default HomePage

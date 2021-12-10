import React, { useEffect, useState } from 'react'
import Navbar from '@components/Navbar/Navbar'


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
      <div>Platzi and Next.js</div>
        {
          productList.map((data, key) => (<div key={key}>{ data.name}</div>))
        }
    </div>
  )
}

export default HomePage

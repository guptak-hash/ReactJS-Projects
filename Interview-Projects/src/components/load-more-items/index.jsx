import { useEffect, useState } from "react"
import './style.css'

export default function LoadMoreItems(){
    const [loading,setLoading]=useState(false)
    const [products,setProducts]=useState([])
    const [count,setCount]=useState(0)
    const [disableLoad,setDisableLoad]=useState(false)

    const fetchProducts=async()=>{
        try{
            setLoading(true)
             const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0 ? 0 : count*20}`)
             const data = await res.json()
            
            if(data && data.products && data.products.length){
                console.log(products)
                setProducts((prevData)=> [...prevData,...data.products] )
                setLoading(false)
            }
        }
        catch(e){
            console.log(e)
            setLoading(false)
        }
    }
    
    useEffect(()=>{
        fetchProducts()

    },[count])

    useEffect(()=>{
         if(products && products.length>180 ){
            setDisableLoad(true)
         }
    },[products])

    if(loading){
        return (<div>Loading data! Please wait.</div>)
    }

    return (
        <div className="parent">
           <div className="child">
              {
                products && products.length ?
                products.map((item)=>(
                    <div className="products" key={Date.now()}>
                          <img
                          src={item.thumbnail}
                          alt={item.title}/>
                          <p>{item.title}</p>
                    </div>
                ))
                :
                null
              }
           </div>
           <div className="loadmore">
            <button disabled={disableLoad} onClick={()=>setCount(count+1)}>Load More Items</button>
           </div>
        </div>
    )
}
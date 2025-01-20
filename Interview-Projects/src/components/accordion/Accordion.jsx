import { useState } from "react"
import accordionData from "./data"
import './style.css'

const Accordion=()=>{
    const [selected,setSelected]=useState(null)
    const [toggleMultiple,setToggleMultiple] = useState(false)
    const [selectedArr,setSelectedArr]=useState([])

    function handleSingleSelection(getCurrentiId){
        setSelected(getCurrentiId === selected ? null : getCurrentiId)
        console.log(getCurrentiId)
    }
  

    function handleMultipleSelection(getCurrentiId){
          let cpyArr=[...selectedArr]
          let findIndexofCurrentid = cpyArr.indexOf(getCurrentiId)
         
          if(findIndexofCurrentid===-1){
            cpyArr.push(getCurrentiId)
          }
          else{
            cpyArr.splice(findIndexofCurrentid,1)
          }
          setSelectedArr(cpyArr)

    }

    console.log(selected,selectedArr)
    return (
       
        <div className="wrapper">
            <button onClick={()=>setToggleMultiple(!toggleMultiple)}>Multiple Selection</button>
            <div className="accordion">
              {
              accordionData && accordionData.length>0 ? (
                    accordionData.map((dataItem,index)=> (<div className="item" key={index}>
                    <div className="title" onClick={toggleMultiple ? ()=>handleMultipleSelection(dataItem.id)
                    :
                    ()=>handleSingleSelection(dataItem.id)}>
                       <h3 >{dataItem.question}   +</h3>
                       
                       {
                         toggleMultiple ? 
                         selectedArr.indexOf(dataItem.id)!==-1 &&
                         <div className="content">{dataItem.answer}</div>:
                         selected === dataItem.id &&  <div className="content">{dataItem.answer}</div>
                       }
                    </div>
                </div>))
                )
                :
                (
                    <div>Data Not Found!</div>
                )
              }
            </div>
        </div>
    )
}

export default Accordion
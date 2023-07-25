import React from 'react'
import 'boxicons'

const obj = [
    {
    name:"Expense",
    color: 'rgb(255, 99, 132)',
},
{
    name:"Income",
    color: 'rgb(54, 162, 235)',
},
{
    name:"Investment",
    color: 'rgb(255, 205, 86)',
}
]

export default function List() {
  return (
    <div className= "flex flex-col py-6 gap-3">
        <h1 className= 'py-4 font-bold text-xl text-white'>Transaction History</h1>
        {obj.map((v,i) => <Transaction key={i} category={v}></Transaction>)}
        
    </div>
  )
}

function Transaction({category}){
    if(!category) return null;
    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{ borderRight : `8px solid ${category.color ??  "#e5e5e5"}`}}>
            <button className='px-3'><box-icon size="20px" color={category.color ??  "#e5e5e5"} name="x-circle"></box-icon></button>            
            <span className='block w-full'>{category.name ?? ''}</span>
        </div>
    )
}
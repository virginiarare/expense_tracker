import React from 'react'
import {default as api} from '../store/apiSlice';


// const obj = [
//     {
//     type:"Expense",
//     color: 'rgb(255, 99, 132)',
//     percent:45
// },
// {
//     type:"Income",
//     color: 'rgb(54, 162, 235)',
//     percent:20
// },
// {
//     type:"Investment",
//     color: 'rgb(255, 205, 86)',
//     percent:10
// }
// ]


export default function Labels() {

    const { data, isFetching , isSuccess, isError } = api.useGetLabelsQuery()
    let Transactions;

    if(isFetching){
        Transactions = <div>Fetching</div>;
    }else if(isSuccess){
        Transactions = data.map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>);
    }else if(isError){
        Transactions = <div>Error</div>
    }

  return (
    <>
      {Transactions}
    </>
  )
}

function LabelComponent({data}){
    if(!data) return <></>;
    return(
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{background: data.color??'#e1b245'}}></div>
                <h3 className="text-md text-white" > {data.type ?? ""} </h3>
            </div>
            <h3 className="font-bold text-white" > {data.percent ?? 0}% </h3>
        </div>
    )
}

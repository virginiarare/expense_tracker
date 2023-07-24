import React from 'react'

export default function Form() {
  return (
    <div className="form max-w-sm-auto w-96">
        <h1 className= 'font-bold pb-4 text-xl'>Transaction</h1>
        <form id='form'>
            <div className='grid gap-4'>
                <div className='input-group'>
                    <input type='text' placeholder='Salary, House Rent, SIP' className='form-input'/>
                </div>
            </div>
        </form>
    </div>
  )
}

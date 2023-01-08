import React from 'react'
const Input = (props) => {
    let input = "adsdfsd"
    if(props.type == "text" || props.type == "email"){
         input = <input type={props.type} name={props.name} placeholder={props.placeholder} className="border-[#37438a] border-[1px] p-[0.60rem] w-full rounded-2xl"/>
    } else{
         input = <textarea rows="5" name={props.name} placeholder={props.placeholder} className="border-[#37438a] border-[1px] p-[0.60rem] w-full rounded-2xl"></textarea> 
    }
  return (
    <div className='mb-5'>
        <div className='mb-3'>
            <label className='text-[#37438a] text-[20px]'>{props.label}</label>
        </div>
        {input}
    </div>
  )
}

export default Input

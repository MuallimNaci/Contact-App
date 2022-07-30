import React from 'react'
import { useState } from 'react'


function Form({addContact, contact}) {
    
    const [form, setForm] = useState({fullname:"", phone_number:""})

    const onChangeSubmit=(e)=>{
        setForm({...form, [e.target.name] : e.target.value})
    } // forma veri girişi sağlar

    const onSubmit = () =>{
        if (form.fullname ===  '' || form.phone_number === '') {
            return false;
        }
        addContact([...contact,form])
        console.log(form)
        setForm({fullname: "", phone_number: ""})
    } // butona tıklandığı anda boş form kontrolü sonrası 'fullname' ve 'phone_number' değerlerini contact state'ine atar

  return (
    
        <>
            <div className='col-12 mb-3'>
                <input value={form.fullname} name='fullname' placeholder='Full Name' onChange={onChangeSubmit}/>
            </div>

            <div className='col-12 mb-3'>
                <input value={form.phone_number} name='phone_number' placeholder='Phone Number' onChange={onChangeSubmit}/>
            </div>

            <div className='col-12'>
                <button className='button1' onClick={onSubmit}>Add</button>
            </div>
        </>
    
  )
}

export default Form
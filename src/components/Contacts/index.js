import { useState, useEffect } from 'react'
import List from './List'
import Form from '../Form'

function Contacts() {
    const [contacts, setContacts] = useState([])

    useEffect(()=>{
        console.log(contacts)
    },[contacts])

  return (
    <div className='container'>
      <div className='row p-3'>
        <h1>Contacts</h1>
        <List contact={contacts} />
        <Form addContact={setContacts} contact={contacts} />
        </div>
    </div>
  )
}

export default Contacts
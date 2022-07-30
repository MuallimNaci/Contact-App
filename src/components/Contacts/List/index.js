import { useState } from 'react'

function List({contact}) {

  const [filterText, setFilterText] = useState("")
  const filtered = contact.filter((item)=>{
    return Object.keys(item).some((key)=>
      item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    )
  })
  return (
    
      <div className='col-12'>
          <input placeholder='Filter Contact' value={filterText} onChange={(e)=> setFilterText(e.target.value)}/>

          <ul className='list-group'>
              {
                filtered.map((item,i)=>
                  <li key={i} className='mb-2 mt-2'>{item.fullname} - {item.phone_number}</li>
                )
              }
          </ul>
          <p>Total Contacts ({filtered.length})</p>
      </div>
      
  )
}

export default List
import React from 'react'

import '../styles/kanbanList.css'
// Nom, prénom, email, date et un select pour déplacer le candidat.
import { useState } from 'react'

const Card = ({ application }) => {
    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        setStatus(e.target.value)
    }
  return (
    <div className='card-card-container'>
        <div className='card-container'>
            <div className='card-header'>
                <h4 className='name'>{application.first_name}</h4>
                <h4 className='surname'>{application.last_name}</h4>
            </div>

            <div className='card-content'>
                <div className='card-email'>{application.email}</div>
                <div className='card-date'>{application.created_at}</div>
            </div>

            <div className='assigned'>
                <label for="column-select">Assign to:</label>

                <select name="columns" id="column-select" onChange={handleChange} value={status}>
                    {}
                    <option value="">--Please choose an option--</option>
                    <option value="to_call">to_call</option>
                    <option value="to_meet">to_meet</option>
                    <option value="recruited">recruited</option>
                    <option value="abandoned">abandoned</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Card
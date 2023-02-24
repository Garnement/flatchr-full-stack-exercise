import React from 'react'
// 'to_call', 'to_meet', 'recruited', 'abandoned']
import '../styles/kanbanList.css'

import Card from './Card'

import { useState } from 'react'

// Nom, prénom, email, date et un select pour déplacer le candidat.

//applications 
// .status
// .first_name
// .last_name
// .email

const KanbanList = ({ applications }) => {
    console.log(applications)
  return (
    <div className='columns-container'>
        <div className='column-to_call'>
            <h4>To Call</h4>
            { applications.map(application => {
                if(application.status === "to_call") {
                    return <Card application={application}/>
                }
            })}
        </div>
        <div className='column-to_meet'>
            <h4>To Meet</h4>
            { applications.map(application => {
                if(application.status === "to_meet") {
                    return <Card application={application}/>
                }
            })}
        </div>
        <div className='column-recruited'>
            <h4>Recruited</h4>
            { applications.map(application => {
                if(application.status === "recruited") {
                    return <Card application={application}/>
                }
            })}
        </div>
        <div className='column-abandoned'>
            <h4>Abandonned</h4>
            { applications.map(application => {
                if(application.status === "abandoned") {
                    return <Card application={application}/>
                }
            })}
        </div>
    </div>
  )
}

export default KanbanList
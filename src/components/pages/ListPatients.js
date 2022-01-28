import * as React from 'react';
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Message from '../layout/Message'
import Container from '../layout/Container'
import TablePatients from '../patients/TablePatients';

import styles from './ListPatients.module.css'

export default function ListPatients() {


    

    const location = useLocation()
    let message = ''

    if(location.state) {
        message = location.state.message
    }

    return (
        <div className={ styles.ListPatientContainer }>
            <h1>Pacientes</h1>

            <TablePatients />

            { message && (
                <Message message={ message } type="success" />
            )}

        </div>
    )
}
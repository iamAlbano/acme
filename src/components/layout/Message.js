import styles from './Message.module.css'

import { useState, useEffect } from 'react';

export default function Message( { message, type } ) {

    const [show, setShow] = useState(false)

    useEffect(() => {
        if(!message){
            setShow(false)
            return
        } else
            setShow(true)

        const timer = setTimeout(() => {
            setShow(false)
        }, 6000)

        return () => clearTimeout(timer)

    }, [message])


    return (
        <>
        { show && (
            <div className={ ` ${styles.message} ${styles[type]} `}> { message }</div>
        )} 
        </>


    )
}
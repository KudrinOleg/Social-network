import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
const DialogItems = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}><NavLink to={path} >{props.name}</NavLink></div>
    );
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you!?' },
        { id: 3, message: 'Yo' }
    ]
    let dialogs = [
        { id: 1, name: 'Jeka' },
        { id: 2, name: 'Nadya' },
        { id: 3, name: 'Petr' },
        { id: 4, name: 'Oleg' }
    ]
    let dialogsElement = dialogs
        .map(d => <DialogItems name={d.name} id={d.id} />)

    let messagesElement = messages
        .map(m => <Message message={m.message} id={m.id} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs;
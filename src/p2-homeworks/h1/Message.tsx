import React from 'react';
import m from './Message.module.css'

type messageData = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: messageData) {
    return (
        <div className={m.general}>
            <Avatar immage={props.avatar}/>
            <div className={m.before}></div>
            <div className={m.content}>
                <Name user={props.name}/>
                <Messages messages={props.message}/>
                <Time time={props.time}/>
            </div>
        </div>
    );
}


type AvatarPropsType = {
    immage: string
}

function Avatar(props: AvatarPropsType) {

    return (
            <img className={m.img} src = {props.immage} />
    )
}

type NamePropsType = {
    user: string
}

function Name(props: NamePropsType) {
    return (<div className={m.name}>
        <span>{props.user}</span>
    </div>)
}


type MessagePropsType = {
    messages: string
}

function Messages(props: MessagePropsType) {
    return (<div className={m.message}>{props.messages}</div>)
}


type TimePropsType = {
    time: string
}

function Time(props: TimePropsType) {

    return (<div className={m.time}>
        {props.time}
    </div>)
}


export default Message;

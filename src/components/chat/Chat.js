import React, { useEffect, useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { receiveMessage, sendMessage } from '../../redux/actions';
import { savedState } from '../../redux/reducer';
import { dateFormat } from '../../contactsData';
// import { useParams } from 'react-router-dom';

function Chat() {
    const [input, setInput] = useState('')

    const { currentChat, user } = useSelector(state => ({
        currentChat: state.currentChat || JSON.parse(savedState.getItem('currentChat')),
        user: state.user
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(currentChat);
        console.log(JSON.parse(savedState.getItem('currentChat')))
    }, [])


    const handleSendMessage = (e) => {
        if(input !== '') {
            const newMessage = {
                text: input,
                datestamp: dateFormat(new Date()),
                chatRecivier: true
            }
            console.log(newMessage);
            dispatch(sendMessage(newMessage))
            setInput('')

            dispatch(receiveMessage())
        }
    }

    return currentChat && (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={currentChat.avatar} />

                <div className='chat__headerInfo'>
                    <h3>{currentChat.fullName}</h3>
                    <p>Last seen</p>
                </div>
            </div>
            <div className='chat__body'>
                {currentChat.messages && currentChat.messages.map(item => {
                    if(!item) return
                    return <div className='chat__message-wrapper' key={item.datestamp + item.text}>
                        {!item.chatRecivier && <Avatar src={currentChat.avatar} />}
                        <p className={
                        `chat__message ${item.chatRecivier &&
                        'chat__reciever'}`
                    }>
                        {item.text}
                        <span className='chat__timestamp'>
                            {item.datestamp}
                        </span>
                    </p>
                    </div>
                })}

            </div>
            <div className='chat__footer'>
                <div className='chat__footer-sendMessage'>
                    <textarea type='text' value={input}
                        onInput={e => {
                            setInput(e.target.value)
                        }} />
                    <IconButton onClick={e => {
                        handleSendMessage(e)
                    }}>
                        <Send />
                    </IconButton>
                    {/* <button>Send a message</button> */}
                </div>
            </div>
        </div>
    )
}

export default Chat

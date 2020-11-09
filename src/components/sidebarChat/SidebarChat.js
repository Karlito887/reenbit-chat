import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentChat } from '../../redux/actions';

function SidebarChat({ addNewChat, chatData }) {
    const dispatch = useDispatch()

    const chooseChat = () => {
        dispatch(setCurrentChat(chatData))
    }
    // const createChat = () => {
    //     const roomName = prompt('Please enter name for chat')

    //     if (roomName) {
    //         // do some database stuff
    //     }
    // }


    return (
        <Link to={`/rooms/${chatData.id}`} onClick={chooseChat}>
            <div className='sidebarChat'>
                <Avatar src={chatData.avatar} />
                <div className='sidebarChat__info'>
                    <h2>{chatData.fullName}</h2>
                    <p>Last message</p>
                </div>
            </div>
        </Link>
    )
}

export default SidebarChat

import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentChat } from '../../redux/actions';

function SidebarChat({ chatData }) {
    const dispatch = useDispatch()

    const chooseChat = () => {
        dispatch(setCurrentChat(chatData))
    }


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

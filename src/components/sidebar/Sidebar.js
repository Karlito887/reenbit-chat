import React, { useEffect } from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { savedState } from '../../redux/reducer';
import SidebarChat from '../sidebarChat/SidebarChat';

function Sidebar() {
    const { contacts, user } = useSelector(state => ({
        contacts: state.contacts,
        user: state.user
    }))

    const chats = contacts.map(item => {
        return <SidebarChat key={item.id} chatData={item} />
    })

    useEffect(() => {
        console.log(JSON.parse(savedState.getItem('user')));
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src={user.photoURL}/>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlinedIcon />
                    <input placeholder='Search or start new chat' type='text' />
                </div>
            </div>
            <div className='sidebar__chats'>
                {chats}
            </div>
        </div>
    )
}

export default Sidebar

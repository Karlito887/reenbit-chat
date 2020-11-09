import axios from 'axios'
import { useDispatch } from 'react-redux'
import { dateFormat } from '../contactsData'

export const setCurrentChat = (payload) => ({
    type: 'SET_CURRENT_CHAT',
    payload
})

export const setUser = (payload) => ({
    type: 'SET_USER',
    payload
})

export const sendMessage = (payload) => ({
    type: 'SEND_OR_GET_MESSAGE',
    payload
})

export const receiveMessage = () => dispatch => {
    setTimeout(async () => {
        let res = await axios.get('https://api.chucknorris.io/jokes/random')

        dispatch({
            type: 'SEND_OR_GET_MESSAGE', payload: {
                text: res.data.value,
                datestamp: dateFormat(new Date()),
                chatRecivier: false
            }
        })
    }, 11000)
};
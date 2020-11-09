import contactsData from '../contactsData'

export const savedState = window.localStorage

const initialState = {
    user: JSON.parse(savedState.getItem('user')) || null,
    contacts: JSON.parse(savedState.getItem('contacts')) || contactsData,
    currentChat: JSON.parse(savedState.getItem('currentChat')) || null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            savedState.setItem('user', JSON.stringify(action.payload))
            return {
                ...state,
                user: action.payload
            }
        case 'SET_CURRENT_CHAT':
            savedState.setItem('currentChat', JSON.stringify(action.payload))
            return {
                ...state,
                currentChat: action.payload,
            }
        case 'SEND_OR_GET_MESSAGE':
            const updatedContacts = (() => {
                let updatedContacts = []
                for (let contact of state.contacts) {
                    if (contact.id === state.currentChat.id) {
                        updatedContacts.push({
                            ...contact,
                            messages: [...state.currentChat.messages, action.payload]
                        })
                    } else updatedContacts.push(contact)
                }
                return updatedContacts
            })()

            savedState.setItem('contacts', JSON.stringify(updatedContacts))
            const currentChatFind = (() => {
                for (let contact of updatedContacts) {
                    if (contact.id === state.currentChat.id) {
                        return contact
                    }
                }
            })()
            savedState.setItem('currentChat', JSON.stringify(currentChatFind))
            return {
                ...state,
                currentChat: {
                    ...state.currentChat,
                    messages: [...state.currentChat.messages, action.payload],
                },
                contacts: updatedContacts
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer
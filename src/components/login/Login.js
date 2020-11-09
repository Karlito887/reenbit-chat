import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../../firebase'
import './Login.css'
import { setUser } from '../../redux/actions'

function Login() {
    const dispatch = useDispatch()

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result)
            dispatch(setUser(result.user))
        })
        .catch(error => console.log(error.message))
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <div className='login__text'>
                    <h1>Please login to app</h1>

                    <Button onClick={signIn}>
                        Sign in With Google
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login

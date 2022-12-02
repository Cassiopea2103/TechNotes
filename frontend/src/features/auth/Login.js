import { useLoginMutation } from "./authApiSlice"

import { useState, useEffect, useRef } from 'react'

import { useNavigate, Link } from "react-router-dom"

import { useDispatch } from "react-redux"
import { setCredentials } from "./authSlice"

const Login= ()=> {

    const [
        loginUser,
        {
            isLoading
        }
    ]= useLoginMutation()

    const navigate= useNavigate()

    const dispatch= useDispatch()

    const userRef= useRef()
    const errorRef= useRef()

    const [ username, setUsername ]= useState('')
    const [ password, setPassword ]= useState('')
    const [ errorMessage, setErrorMessage ]= useState('')

    const onUsernameChange= e=> setUsername( e.target.value )
    const onPasswordChange= e=> setPassword( e.target.value )
    
    useEffect(
        ()=> {
            userRef.current.focus()
        },
        []
    )

    useEffect(
        ()=> {
            setErrorMessage('')
        }, 
        [username, password]
    )

    const errClass= errorMessage ? "errmsg": "offscreen"

    const handleLogin= async( e )=> {
        e.preventDefault()
        try{
            const accessToken= await loginUser({ username, password }).unwrap()
            dispatch( setCredentials( { accessToken } ))
            setUsername('')
            setPassword('')
            navigate('/dash')
        }
        catch( error ){
            if ( !error.status ){
                setErrorMessage('No Response from the Server')
            }
            else if( error.status === 400){
                setErrorMessage("No username or password")
            }
            else if ( error.status === 401 ){
                setErrorMessage("Unauthorized. User maybe not found or inactive")
            }
            else {
                setErrorMessage(error?.data?.message)
            }
            errorRef.current.focus()
        }
    }

    if (isLoading) return <p>Loading...</p>

    const content= (
        <section
            className= "public"
        >

            <header>
                <h1>Employee Login</h1>
            </header>

            <main
                className= "login"
            >
                <p
                    ref= { errorRef }
                    className= { errClass }
                    aria-live= 'assertive'
                >
                    { errorMessage }
                </p>

                <form
                    className= 'form'
                    onSubmit= { handleLogin }
                >
                    <label htmlFor="username">
                        Username
                    </label>
                    <input 
                        type="text" 
                        name= "username"
                        id= "username"
                        className= "form__input"
                        value= { username }
                        onChange= { onUsernameChange }
                        required
                        autoComplete= " off "
                        ref= { userRef }
                    />

                    <label htmlFor="password">
                        Password
                    </label>
                    <input 
                        type="text" 
                        id= 'password'
                        name= 'password'
                        className= 'form__input'
                        required
                        value= { password }
                        onChange= { onPasswordChange }
                        autoComplete= 'off'
                    />

                    <button
                        className= 'form__submit-button'
                    >
                        Sign In
                    </button>
                </form>
            </main>
            
            <footer>

            </footer>

        </section>
    )

    return content; 
}

export default Login
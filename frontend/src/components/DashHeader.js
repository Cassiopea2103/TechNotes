import { Link, useNavigate, useLocation } from "react-router-dom";

import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { useSendLogoutMutation } from "../features/auth/authApiSlice";

const DashHeader= ()=> {

    const [
        sendLogout,
        {
            isLoading,
            isSuccess,
            isError,
            error
        }
    ]= useSendLogoutMutation()

    const navigate= useNavigate()

    const { pathname }= useLocation()

    const DASH_REGEX= /^\/dash(\/)?$/
    const NOTES_REGEX= /^\/dash\/notes(\/)?$/
    const USERS_REGEX= /^\/dash\/users(\/)?$/

    useEffect(
        ()=> {
            if ( isSuccess ){
                navigate('/')
            }
        },
        [ isSuccess, navigate ]
    )

    if ( isLoading ) return <p>Loading...</p>

    if ( isError ) return <p>Error: { error.message } </p>

    let dashClass= null 

    const pathCondition= !DASH_REGEX.test( pathname ) && !NOTES_REGEX.test(pathname)
                        && USERS_REGEX.test( pathname )
    
    if ( !pathCondition ) {
        dashClass= 'dash-header__container--small'
    }

    const logoutButton= (
        <button
            className= 'icon-button'
            title= 'Logout'
            onClick= { ()=> {
                sendLogout()
            } }
        >
            <FontAwesomeIcon
                icon= { faRightFromBracket }
            />
        </button>
    )

    const content= (
        <div className={`dash-header ${ dashClass }`}>
            <div className="dash-header__container">
                <h1>
                    <Link to={'/dash'}>
                        TechNotes
                    </Link>
                </h1>
                
                <nav className= 'dash-header__nav'>
                    { logoutButton }
                </nav>
            </div>
        </div>
    )

    return content
}

export default DashHeader
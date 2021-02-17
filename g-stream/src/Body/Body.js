import React from 'react'
import Profile from '../Profile/Profile'
import Stream from '../Stream/Stream'
import './Body.css'

function Body() {
    return (
        <div className='body'>
            <div className='body__Left'>
                <Stream />
                <Profile />
            </div>
            <div className='body__rightPlaceholder'></div>
        </div>
    )
}

export default Body

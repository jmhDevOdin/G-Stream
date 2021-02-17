import React from 'react'
import './Creator.css'

function Creator({avatar, name, followers}) {
    return (
        <div className='creator'>
            <div className='creator__details'>
                <img src={avatar} alt='avatar' />
                <p>{name}</p>
            </div>
            <p>{followers}</p>
        </div>
    )
}

export default Creator

import React from 'react'
import './RecentItem.css'

function RecentItem({url, title}) {
    return (
        <div className='item'>
            <iframe 
                width="400" 
                height="235" 
                src={url} 
                frameborder="0" 
                allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                allowfullscreen>
            </iframe>

            <div className='item__details'>
                <img src='data:image/png;base64,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' />
                <div className='item__detailsText'>
                    <h4>{title}</h4>
                    <p>Star Citizen</p>
                    <p>Videogames</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem

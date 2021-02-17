import React from 'react'
import './Stream.css'

function Stream() {
    return (
        <div>
            <div className='stream__container'>
                <div className='stream__status'>
                    <div className='stream__statusContainer'>
                        <div className='stream__statusContainerTop'>
                            <div className='stream__statusIndicator'>OFFLINE</div>
                            <h2>Check out the streams below from Star Citizen</h2>
                        </div>
                        <div className='stream__statusInfo'>
                            <i className='fas fa-bell'></i>
                            <p>You will be notified when Star Citizen is live</p>
                        </div>
                    </div>
                </div>
                <div className='stream__video'>
                    <div className='stream__videoEmbed'>
                        <iframe 
                            width="500" 
                            height="295" 
                            src="https://www.youtube.com/embed/3zNr5jWrZrA" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Stream

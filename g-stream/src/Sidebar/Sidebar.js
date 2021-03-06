import React from 'react'
import './Sidebar.css'
import Creator from '../Creator/Creator';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <h5>FOLLOWED CREATORS</h5>
                <Creator avatar='https://yt3.ggpht.com/ytc/AAUvwnhXNjC8scVdtSnJclwrMOzSVO42dGfuquo_QvOe-w=s88-c-k-c0x00ffffff-no-rj' name='Star Citizen' followers='2.8m'/>
                <Creator avatar='https://pbs.twimg.com/profile_images/1089170321867972610/XvMNRkj9_400x400.jpg' name='Abroad in Japan' followers='3.5m'/>
                <Creator avatar='https://theanimeman.merchforall.com/assets/logo.png' name='The Anime Man' followers='1.8m'/>
                <h5>RECOMMENDED CREATORS</h5>
                <Creator avatar='https://i.redd.it/oypevdffcwi11.jpg' name='Linus Tech Tips' followers='10.6m'/>
                <Creator avatar='https://pbs.twimg.com/profile_images/772886734090608640/vcgh1JwJ_400x400.jpg' name='Level1Tech' followers='1.2m'/>
                <Creator avatar='https://i.iheart.com/v3/url/aHR0cHM6Ly9kM3dvNXdvanZ1djdsLmNsb3VkZnJvbnQubmV0L3RfcnNzX2l0dW5lc19zcXVhcmVfMTQwMC9pbWFnZXMuc3ByZWFrZXIuY29tL29yaWdpbmFsLzhhOTMzNzlkMTc2N2I5YmJmY2EzYjE0ZTljZTVhMWE2LmpwZw' name='Adv China' followers='3.1m'/>
                <p className='sidebar__topShowMore'>Show More</p>
            </div>
            <div className='sidebar__bottom'>
                <div className='sidebar__bottomContainer'>
                    <i class="fas fa-search"></i>
                    <input type='text' placeholder='Search to Add Friends' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar

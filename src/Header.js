import React from 'react';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <div className="header">
            <div className="header_icons">
               <div className="header_icon header_icon--active">
               <HomeIcon /> 
               <p>Home</p>
               </div>

               <div className="header_icon">
               <FlashOnIcon />
               <p>Trending</p>
               </div>

               <div className="header_icon">
               <LiveTvIcon />
               <p>Verified</p>
               </div>
               
                <div className="header_icon">
                <VideoLibraryIcon /> 
                <p>Collections</p>
                </div>
                
                <div className="header_icon">
                <SearchIcon />
                <p>Search</p>
                </div>
                
                <div className="header_icon">
                <PersonOutlineOutlinedIcon />  
                <p>Account</p>
                </div>
                              
        </div>
        <img 
            src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" 
            alt=""
            />
        </div>
    )
}

export default Header;

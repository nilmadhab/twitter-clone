import React from 'react'

import './Sidebar.css'

import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// npm i @material-ui/core, npm i @material-ui/icon
import MessageIcon from '@material-ui/icons/Message';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

// import {Button} from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>
            {/* Sidebar option */}

            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={MessageIcon} text="Messages"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={ListIcon} text="Lists"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={PersonIcon} text="Profile"/>
            <SidebarOption Icon={MoreVertIcon} text="More"/>
            {/* Sidebar 47:17 option */}
            {/* Sidebar option */}
            {/* Sidebar option */}
            {/* Sidebar option */}

            <button variant="outlined" className="sidebar__tweet" fullwidth>Tweet</button>
        </div>
    )
}

export default Sidebar

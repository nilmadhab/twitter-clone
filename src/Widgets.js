import React from 'react'

import './Widgets.css'

import { TwitterTimelineEmbed, TwitterShareButtonm, TwitterTweetEmbed } from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search"

        
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"></SearchIcon>
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2> What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1380407215727738884"} />
                <TwitterTimelineEmbed
                 sourceType="profile" 
                 screenName="Nilmadhabmondal"
                 options={{ height: 400 }}
                 />

            </div>
        </div>
    )
}

export default Widgets

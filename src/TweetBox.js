
import React from 'react'
import './TweetBox.css'

import {Avatar, Button} from '@material-ui/core'

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars.githubusercontent.com/u/5565819?v=4"/>
                    <input placeholder="What's Happening" type="text"/>
                </div>
                <input className="tweetBox__imageInput" 
                    type="text" 
                    placeholder="Optional enter the image url" /> 
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox

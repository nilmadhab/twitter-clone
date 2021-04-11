import React from 'react'

import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'

function Feed() {
    return (
        <div className="feed">

            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            

            {/* Tweet box */}

            <TweetBox />

            {/*post */}

            <Post />

            <Post />


            
            {/*post */}

            {/*post */}
        </div>
    )
}

export default Feed

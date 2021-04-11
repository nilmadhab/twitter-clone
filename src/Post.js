import React from 'react'

import {Avatar} from '@material-ui/core'

import './Post.css'

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://avatars.githubusercontent.com/u/5565819?v=4" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Nilmadhab <span>
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p> Nil challenge you to build a twitter clone</p>
                    </div>
                    <img src="https://pbs.twimg.com/media/Eyn99ZpXEAkvXhY?format=jpg&name=large" alt="this is my life"/>
                </div>
            </div>
        </div>
    )
}

export default Post;

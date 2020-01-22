import React from "react";

const FollowerCard = props => {
    return (
        <div className="card">
            <img src={props.follower.avatar_url} alt="follower avatar" />
            <div>
                <h2 className="name">{props.follower.login}</h2>
                <p>Profile: <a href={props.follower.html_url}>{props.follower.html_url}</a></p>
            </div>
        </div>
    )
}

export default FollowerCard;
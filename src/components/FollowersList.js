import React from "react";
import FollowerCard from "./FollowerCard";

const FollowersList = props => {
    return (
        <div>
            {props.followers.map(follower => {
                return <FollowerCard key={follower.id} follower={follower} />
            })}
        </div>
    )
}

export default FollowersList;
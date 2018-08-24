import React from 'react';
const UserOutput = (props) => {
    return (<div className = {props.class}>
        <p>{props.children}</p>
        <p>{props.userName}</p>
    </div>);
}
export default UserOutput;
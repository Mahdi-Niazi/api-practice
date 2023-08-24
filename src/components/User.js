import React from "react";
// import { useDispatch } from "react-redux";
const User = ({ key, firstName, lastName }) => {
    // const dispatch = useDispatch();
    return (
        <ul>
            <li key={key}>{firstName} - {lastName}</li>
        </ul>
    );
};

export default User;
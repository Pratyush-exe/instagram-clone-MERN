import { Route, Navigate } from "react-router-dom";
import React from 'react'
import PostsMain from "../Posts/PostsMain";

function ProtectedRoute() {
    if (localStorage.getItem("INSTAGRAM-CURRENT-USER") != null) {
        return (<PostsMain />)
    } else {
        return (<Navigate to="/" />)
    }
}

export default ProtectedRoute


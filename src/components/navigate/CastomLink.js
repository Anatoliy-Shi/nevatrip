import React from 'react';
import {Link, useMatch} from "react-router-dom";

// @ts-ignore
export const CustomLink = ({to, children}) => {
    const match = useMatch(to)
    return (
        <Link to={to} style={{color: match ? '#4f83cc' : undefined}}>{children}</Link>
    )
}
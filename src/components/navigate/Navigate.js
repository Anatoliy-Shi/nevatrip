import React from 'react';
import {CustomLink} from "./CastomLink";



export const Navigate = () => {

    return (
        <ul className={'navigate'}>
            <li>
                <CustomLink to="/">
                    Верстка
                </CustomLink>
            </li>
            <li>
                <CustomLink to="/task-select">
                    Задание из пунка А в В
                </CustomLink>
            </li>

        </ul>
    )
}
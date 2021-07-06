import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Wrong data flow on this component

const Card = ({ body, email }) => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div style={{ margin: '25px' }} >
            <div className='row light'  >
                <div className='col s12'>
                    <p>{body}</p>
                </div>
                <div className='col s6 offset-s6 right-align'>
                    <span>{email}</span>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Card;
import React from 'react';
const Table = ({ ...props }) => {
    return (
        <div style={{ maxWidth: '610px', margin: 'auto' }}>
            <div className='card'>
                <div className='card-image waves-effect waves-block waves-light'>
                </div>
                <div className='card-content'>
                    <span className='card-title activator grey-text text-darken-4'>Name<i className='material-icons right'>{props.name}</i></span>
                    <span className='card-title activator grey-text text-darken-4'>Full Name<i className='material-icons right'>{props.fullName}</i></span>
                    <span className='card-title activator grey-text text-darken-4'>Email<i className='material-icons right'>{props.email}</i></span>
                    <span className='card-title activator grey-text text-darken-4'>Website<i className='material-icons right'>{props.website}</i></span>
                    <span className='card-title activator grey-text text-darken-4'>Company Name<i className='material-icons right'>{props.companyName}</i></span>
                </div>
               
            </div>
        </div>
    )
}
export default Table;
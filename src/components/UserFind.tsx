import React from 'react';
import './UserFind.css'
const UserFind: React.FC = () => {
    return (
        <div>
            <div className='title'>
            <h1>Find User</h1>
        </div>
        <div className="input-wrapper">
            <input type="text" placeholder='Search User' />
            <button>Search</button>
        </div>
        </div>
    );
};

export default UserFind;
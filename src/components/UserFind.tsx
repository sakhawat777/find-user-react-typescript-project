import React, { useState, useEffect } from 'react';
import './UserFind.css'
const UserFind: React.FC = () => {
    const [text, setText] = useState("");
    const [userList, setUserList] = useState<{name: string, email: string, username: string}[] | undefined>();
    const handleClick = () => {
        const findUsers =  userList && userList?.length>0? userList?.filter((user: { name: string; }) => user?.name === text) : undefined;
        setUserList(findUsers);
    }
    useEffect(() => {
        // For Multiple User
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => res.json())
                .then((data) => setUserList(data))
    }, []);
    return (
        <div>
            <div className='title'>
            <h1>Find User</h1>
        </div>
        <div className="input-wrapper">
            <input type="text" placeholder='Search User' value={text} onChange={(e) => setText(e.target.value)} />
            <button disabled={!text} onClick={handleClick}>Search</button>
        </div>
        <div className="body">
            {userList && userList.map(user => {
                return (
                    <div className='body-item'>
                        <h3>Name: {user.name}</h3>
                        <h4>User Name: {user.username}</h4>
                        <p>email: {user.email}</p>
                    </div>
                )
            })}
        </div>
        </div>
    );
};

export default UserFind;

function data(data: any) {
    throw new Error('Function not implemented.');
}

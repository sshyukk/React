import React from 'react'

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    )
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'aaa'
        },
        {
            id: 2,
            username: 'sshyukk',
            email: 'bbb'
        },
        {
            id: 3,
            username: 'sanghyuk',
            email: 'ccc'
        },
    ]
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}

export default UserList

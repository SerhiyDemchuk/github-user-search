import React from 'react';
import Input from './Input';
import ReposList from './ReposList';
import s from './UserPage.module.css'

const UserPage = ({ repName, userId, users, repositories, ...props }) => {
    return (
        <div>
            {users.map((p, index) => {
                if (userId === index) {
                    return <div key={p.id} className={s.userPage}>
                        <div className={s.upperBlock}>
                            <div className={s.avatar}>
                                <img src={p.avatar_url} alt="" />
                            </div>
                            <div className={s.userInfo}>
                                <p>Username: {p.login}</p>
                                <p>Email: {p.email}</p>
                                <p>Location: {p.location}</p>
                                <p>Joined: {p.created_at}</p>
                                <p>Followers: {p.followers}</p>
                                <p>Following: {p.following}</p>
                            </div>
                        </div>
                        <div className={s.bio}>
                            {p.bio}
                        </div>
                        <Input searchRep={props.searchRep} placeholder="Search for User's Repositories" />
                        <ReposList repName={repName} userId={userId} repositories={repositories} />
                    </div>
                }
            })}
        </div>
    )
}

export default UserPage;
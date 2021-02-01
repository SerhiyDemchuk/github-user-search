import React from 'react';
import s from './Search.module.css';

const UsersList = ({ users, ...props }) => {
    return (
        <div className={s.mainSearch}>
            {
                users.map((p, index) => {
                    return <div key={p.id} className={s.searchItem}>
                        <img className={s.userAvatar} src={p.avatar_url} alt="" />
                        <div className={s.userName} onClick={(e) => {props.loadPage(index)}}>{p.login}</div>
                        <div className={s.userRepos}>Repo: {p.public_repos}</div>
                    </div>
                })
            }
        </div>
    )
}

export default UsersList;
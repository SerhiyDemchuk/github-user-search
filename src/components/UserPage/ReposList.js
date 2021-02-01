import React from 'react';
import s from './UserPage.module.css';

const ReposList = ({ repName, userId, repositories, ...props }) => {
    return (
        <div>
            {
                repositories[userId].map(p => {
                    if (p.name.includes(repName)) {
                        return <div key={p.id} className={s.repList}>
                        <div className={s.repName}>
                            <h2><a href={p.html_url}>{p.name}</a></h2>
                        </div>
                        <div className={s.repNum}>
                            <h3>{p.forks_count} Forks</h3>
                            <h3>{p.stargazers_count} Stars</h3>
                        </div>
                    </div>
                    } 
                })
            }
        </div>
    )
}

export default ReposList;
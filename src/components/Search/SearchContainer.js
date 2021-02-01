import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../redux/searchReducer';
import UsersList from './UsersList';
import s from './Search.module.css';
import UserPage from '../UserPage/UserPage';

const SearchContainer = ({ users, repositories, ...props }) => {

    let [showUser, setShowUser] = useState(false);
    let [userId, setUserId] = useState();
    let [repName, setRepName] = useState('s');

    const typeInfo = (e) => {
        props.loadData(e.target.value);
    }

    const loadPage = (e) => {
        setShowUser(true);
        return setUserId(e);
    }

    const searchRep = (e) => {
        return setRepName(e.target.value);
    }

    return (
        <div className={s.container}>
            <div className={s.mainWrap}>
                <h1 className={s.mainTitle}>GitHub Searcher</h1>
                {!showUser
                    ? <div>
                        <div className={s.searchWrap}>
                            <input placeholder="Search for Users" className={s.input} onChange={typeInfo} type="text" />
                        </div>
                        <UsersList loadPage={loadPage} users={users} />
                    </div>
                    : <UserPage searchRep={searchRep} repName={repName} userId={userId} users={users} repositories={repositories} />
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
        repositories: state.repositories
    }
}

export default connect(mapStateToProps, { loadData })(SearchContainer);
import React from 'react';
import teamEdit from '../components/teamEdit'

// wrapper page for editing team member
// displays the teamEdit component

const editPage = () => {
    return (
        <div>
            <h1>Edit Team Member</h1>
            <teamEdit/>
        </div>
    )
};

export default editPage
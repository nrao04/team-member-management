import React from 'react';
import TeamEdit from '../components/TeamEdit'

// wrapper page for editing team member
// displays the teamEdit component

const EditPage = () => {
    return (
        <div>
            <h1>Edit Team Member</h1>
            <TeamEdit/>
        </div>
    )
};

export default EditPage
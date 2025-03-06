import React from 'react';
import TeamEdit from '../components/TeamEdit'

// wrapper page for editing team member
// displays the teamEdit component

const EditPage = () => {
    return (
        <div>
            <div>
                <h1>Edit Team Member</h1>
                <p>
                    Edit contact info, location, and role.
                </p>
                <TeamEdit />
                {/* Description Below the Form */}
                <p>
                </p>
            </div>
        </div>
    );
};

export default EditPage
import React from 'react';
import TeamEdit from '../components/TeamEdit'
import './EditPage.css';

// wrapper page for editing team member
// displays the teamEdit component

const EditPage = () => {
    return (
        <div className="pageContainer">
          <div className="formCard">
            <h2>Edit a team member</h2>
            <p className="subtitle">Edit contact info, location, and role.</p>
            
            <TeamEdit />
          </div>
        </div>
      );
};

export default EditPage
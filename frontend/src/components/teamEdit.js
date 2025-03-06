import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TeamForm from './TeamForm';

// page for editing existing team member
// gets member details and allows for updating

const TeamEdit = () => {
    // gets member ID from URL
    const {id} = useParams();
    // allows us to navigate between pages
    const navigate = useNavigate();
    // stores the team member data
    const [memberData, setMemberData] = useState(null);

    useEffect(() => {
        // fetch existing data of team member
        axios.get(`http://127.0.0.1:8000/api/team-members/${id}/`)
            .then(response => setMemberData(response.data))
            .catch(error => console.error("Error fetching member:", error));
    }, [id]);

    // handles form submission by updating team member
    const handleSubmit = (updatedData) => {
        axios.put(`http://127.0.0.1:8000/api/team-members/${id}/`, updatedData)
            // redirects user back to home page (ran successfully)
            .then(() => navigate('/'))
            // logs errors during req  
            .catch(error => console.error("Update error:", error.response?.data));
    };

     // handles team member deletion
     const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this team member?")) {
            axios.delete(`http://127.0.0.1:8000/api/team-members/${id}/`)
                .then(() => navigate('/'))  // redirects back to home
                .catch(error => console.error("Delete error:", error.response?.data));
        }
    };

    if (!memberData) {
        return <p>Loading...</p>;
    }
    
      return (
        <>
          {/* reuse the same TeamForm component for editing */}
          <TeamForm onSubmit={handleSubmit} initialData={memberData} />
    
          {/* delete button, styled via .deleteButton in EditPage.css */}
          <button className="deleteButton" onClick={handleDelete}>
            Delete
          </button>
        </>
      );
};

export default TeamEdit;
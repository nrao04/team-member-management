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

    return (
        <div>
            <h1>Edit Team Member</h1>
            {/* render form only when data is loaded */}
            {memberData ? (
                <>
                    <TeamForm onSubmit={handleSubmit} initialData={memberData} />
                    <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white", marginTop: "10px" }}>
                        Delete
                    </button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TeamEdit;
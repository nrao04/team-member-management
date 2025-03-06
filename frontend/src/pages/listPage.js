import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TeamList from '../components/TeamList';
import {useNavigate} from 'react-router-dom';

// displays list of team members
// fetches members from the API and provides navigation

const ListPage = () => {
    // stores the team members
    const [members, setMembers] = useState([]);
    // allows navigation to other pages
    const navigate = useNavigate();

    useEffect(() => {
        // fetch list of members from API
        axios.get('http://127.0.0.1:8000/api/team-members/')
            // redirects user back to home page (ran successfully)
            .then(response => setMembers(response.data))
            // logs errors during req
            .catch(error => console.error(error));
    }, []);

    // navigate to edit page when a member is clicked
    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    return (
        <div>
            <h1>Team Members</h1>
            <p>
                You have {members.length} team members.
            </p>
            {/* button to navigate to the add member page */}
            <button onClick={() => navigate('/add')}>Add New Member</button>
            
            {/* Display team members */}
            <ul>
                {members.map(member => (
                    <li key={member.id}>
                        {member.first_name} {member.last_name} - {member.role}
                        <button onClick={() => handleEdit(member.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListPage;

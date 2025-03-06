import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TeamList from '../components/TeamList';
import {useNavigate} from 'react-router-dom';
import * as Avatar from "@radix-ui/react-avatar";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Button } from "../components/Button"; // custom button component
import {PlusIcon, Pencil1Icon} from "@radix-ui/react-icons"

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
        <div className="pageContainer">
          <div className="header">
            <div>
              <h1>Team Members</h1>
              <p>You have {members.length} team members.</p>
            </div>
            <button className="addButton" onClick={() => navigate('/add')}>
              + Add New
            </button>
          </div>
    
          <div className="membersContainer">
            {members.map((member) => (
              <div className="memberItem" key={member.id}>
                {/* Avatar */}
                <Avatar.Root className="avatarRoot">
                  <Avatar.Image
                    className="avatarImage"
                    src={`https://ui-avatars.com/api/?name=${member.first_name}+${member.last_name}&background=0D8ABC&color=fff`}
                    alt={`${member.first_name} ${member.last_name}`}
                  />
                  <Avatar.Fallback className="avatarFallback">
                    {member.first_name.charAt(0)}
                    {member.last_name.charAt(0)}
                  </Avatar.Fallback>
                </Avatar.Root>
    
                {/* Info */}
                <div className="memberInfo">
                  <strong>
                    {member.first_name} {member.last_name}
                    {member.role === 'admin' && <span> (Admin)</span>}
                  </strong>
                  <div>{member.email}</div>
                  <div>{member.phone_number}</div>
                </div>
    
                {/* Edit Button + Tooltip */}
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <button
                        className="editButton"
                        onClick={() => navigate(`/edit/${member.id}`)}
                      >
                        Edit
                      </button>
                    </Tooltip.Trigger>
    
                    <Tooltip.Portal>
                      <Tooltip.Content className="tooltipContent" side="top" sideOffset={8}>
                        Edit Member
                        <Tooltip.Arrow className="tooltipArrow" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
            ))}
          </div>
        </div>
      );
};

export default ListPage;

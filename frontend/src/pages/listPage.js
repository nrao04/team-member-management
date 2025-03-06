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
        <div className="flex flex-col items-center min-h-screen bg-gray-50 p-8">
          {/* Container */}
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Team Members</h1>
                <p className="text-gray-500 text-sm">
                  You have {members.length} team members.
                </p>
              </div>
    
              {/* Add Member Button */}
              <Button
                onClick={() => navigate('/add')}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow-md transition"
              >
                <PlusIcon className="w-5 h-5" /> Add New
              </Button>
            </div>
    
            {/* Member List */}
            <div className="mt-6 space-y-4">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition"
                >
                  {/* Avatar + Info */}
                  <div className="flex items-center gap-4">
                    <Avatar.Root className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <Avatar.Image
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${member.first_name}+${member.last_name}`}
                        alt={`${member.first_name} ${member.last_name}`}
                        className="w-10 h-10 rounded-full"
                      />
                      <Avatar.Fallback
                        className="w-8 h-8 flex items-center justify-center text-lg font-bold text-white bg-blue-400 rounded-full"
                        delayMs={600}
                      >
                        {member.first_name.charAt(0)}
                        {member.last_name.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar.Root>
    
                    <div>
                      <p className="text-lg font-medium text-gray-600">
                        {member.first_name} {member.last_name}{' '}
                        {member.role === 'admin' && (
                          <span className="text-sm text-blue-400"> (Admin)</span>
                        )}
                      </p>
                      <p className="text-gray-500 text-sm">{member.email}</p>
                      <p className="text-gray-500 text-sm">{member.phone_number}</p>
                    </div>
                  </div>
    
                  {/* Edit Button with Tooltip */}
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <Button
                          onClick={() => navigate(`/edit/${member.id}`)}
                          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md transition shadow-md"
                        >
                          <Pencil1Icon className="w-4 h-4" /> Edit
                        </Button>
                      </Tooltip.Trigger>
    
                      <Tooltip.Portal>
                        <Tooltip.Content
                          side="top"
                          sideOffset={6}
                          className="bg-black text-white px-2 py-1 rounded-md text-xs shadow-md"
                        >
                          Edit Member
                          <Tooltip.Arrow className="fill-black" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default ListPage;

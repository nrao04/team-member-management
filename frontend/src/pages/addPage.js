import React from 'react';
import axios from 'axios';
import TeamForm from '../components/TeamForm';
import { useNavigate } from 'react-router-dom';
import './AddPage.css';

const AddPage = () => {
    // allows us to navigate between pages
    const navigate = useNavigate();

    // funct to handle form submission
    const handleSubmit = (newMember) => {
        console.log("Submitting a new member:", newMember);
        // send POST req to backend API to add new member
        axios.post('http://127.0.0.1:8000/api/team-members/', newMember)
            // redirects user back to home page (ran successfully)
            .then(() => navigate('/'))
            // logs errors during req
            .catch(error => console.error("Error:", error.response?.data || error.message));
    };

    return (
        <div className="pageContainer">
          <div className="formCard">
            <h2>Add a team member</h2>
            <p className="subtitle">Set email, location and role.</p>
    
            {/* simple inline form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = {
                  first_name: formData.get('first_name'),
                  last_name: formData.get('last_name'),
                  email: formData.get('email'),
                  phone_number: formData.get('phone_number'),
                  role: formData.get('role'),
                };
                handleSubmit(data);
              }}
            >
              <div className="formSection">
                <h3>Info</h3>
    
                <div className="formGroup">
                  <label htmlFor="first_name">First Name</label>
                  <input id="first_name" name="first_name" type="text" required />
                </div>
    
                <div className="formGroup">
                  <label htmlFor="last_name">Last Name</label>
                  <input id="last_name" name="last_name" type="text" required />
                </div>
    
                <div className="formGroup">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
    
                <div className="formGroup">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input id="phone_number" name="phone_number" type="tel" required />
                </div>
              </div>
    
              <div className="formSection">
                <h3>Role</h3>
    
                <label className="radioLabel">
                  <input type="radio" name="role" value="regular" defaultChecked />
                  Regular – Can’t delete members
                </label>
    
                <label className="radioLabel">
                  <input type="radio" name="role" value="admin" />
                  Admin – Can delete members
                </label>
              </div>
    
              <button className="saveButton" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      );
};

export default AddPage;
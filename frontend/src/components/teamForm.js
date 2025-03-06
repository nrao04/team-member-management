import React, {useState} from 'react';

// form component for adding or editing team members
// accepts opt initial data to prefill form
const TeamForm = ({onSubmit, initialData = {first_name: '', last_name: '', email: '', phone_number: '', role: 'regular'} }) => {
    // local state for form fields
    const [formData, setFormData] = useState(initialData);

    // handles form field changes
    const formFieldChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    // handles form submission
    const formSubmit = (e) => {
        // prevents page reload
        e.preventDefault(); 
        // calls par. funct. with form data
        onSubmit(formData)
    };
    
    // handles form submission details
    return (
        <form onSubmit={formSubmit}>
          {/* info Section */}
          <div className="formSection">
            <h3>Info</h3>
    
            <div className="formGroup">
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                value={formData.first_name}
                onChange={formFieldChange}
                required
              />
            </div>
    
            <div className="formGroup">
              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={formFieldChange}
                required
              />
            </div>
    
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={formFieldChange}
                required
              />
            </div>
    
            <div className="formGroup">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                id="phone_number"
                name="phone_number"
                type="tel"
                value={formData.phone_number}
                onChange={formFieldChange}
                required
              />
            </div>
          </div>
    
          {/* role Section */}
          <div className="formSection">
            <h3>Role</h3>
    
            <label className="radioLabel">
              <input
                type="radio"
                name="role"
                value="regular"
                checked={formData.role === 'regular'}
                onChange={formFieldChange}
              />
              Regular – Can’t delete members
            </label>
    
            <label className="radioLabel">
              <input
                type="radio"
                name="role"
                value="admin"
                checked={formData.role === 'admin'}
                onChange={formFieldChange}
              />
              Admin – Can delete members
            </label>
          </div>
    
          <button type="submit" className="saveButton">
            Save
          </button>
        </form>
      );
};

export default TeamForm;

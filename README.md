# Team Member Management Application
Web application that allows users to **view, add, edit, and delete team members** seamlessly. Built with **React**, **Django**, and **Radix UI**, providing an intuitive UI and smooth user experience.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Future Improvements](#future-improvements)

---
## Demo
**Live Demo**: 

### Screenshots

#### Team List Page
![listPageTeamApp](https://github.com/user-attachments/assets/9df3e6fd-06d8-45cf-919f-713aa7f51e98)

#### Add Member Page
![addPageTeamApp](https://github.com/user-attachments/assets/c24adeb2-730c-4d0b-bb7b-523364a076ad)

#### Edit Member Page
![editPageTeamApp](https://github.com/user-attachments/assets/02da2e45-07f5-45c1-af36-ef61ccdef925)

---

## Features
- Easily view all team members in a clean and organized list
- Add new team members with built-in validation to prevent errors
- Edit team member details quickly and effortlessly
- Remove team members with a simple confirmation prompt
- Modern, responsive, and accessible UI powered by Radix UI
- Fast and reliable backend API built with Django REST Framework

---

## Tech Stack

| Technology          | Description                       |
|--------------------|---------------------------------|
| **Frontend Modules**       | React, Radix UI, Axios          |
| **Backend Modules**        | Django, Django REST Framework   |
| **Database Modules**       | SQLite                           |
| **Styling Modules**        | HTML/CSS                     |
| **State Management** | React Hooks                  |

---

## Installation

### Prerequisites
- **Node.js** installed (for frontend)
- **Python 3.9+** installed (for backend)

### Setup
1) **Clone the repository**
   ```bash
   git clone https://github.com/nrao04/team-member-management.git
   cd team-member-management
2) **Set up backend**
   ```bash
   cd backend
   python -m venv venv
   venv\Scripts\activate # mac users: source venv/bin/activate 
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver  # start Django backend
3) **Set up frontend**
   ```bash
   cd ../frontend
   npm install
   npm start # start React frontend
  The application should now be running at http://localhost:3000
  
---

## Usage
1) Open the application in your browser.
2) Click "Add New Member" to add a new team member.
3) Click the Edit button to update a team member’s details.
4) Click Delete to remove a team member (with confirmation).
5) Enjoy a responsive and smooth UI!

---

## Future Improvements
- Improve UI styling for better aesthetics
- Add animations for smoother user interactions
- Enhance backend security & authentication

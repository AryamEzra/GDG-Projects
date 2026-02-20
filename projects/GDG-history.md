# GDG AASTU History & Management Platform

## Overview

**GDG AASTU History** is a web-based platform designed to document, manage, and preserve the history and ongoing activities of **Google Developer Groups (GDG) AASTU** since its inception.

The platform serves two main purposes:

- A **historical archive** of past projects, members, roles, and documents
- A **management system** for current club activities, teams, courses, and projects

This system ensures continuity, transparency, and efficient collaboration across generations of GDG AASTU members.

---

## Goals & Motivation

- Preserve the institutional memory of GDG AASTU
- Track projects, teams, and contributors across years
- Manage current learning programs and projects
- Improve coordination between leads, mentors, and members
- Provide a single source of truth for club activities

---

# Core Features

---

## 1. Historical Archive

### Past Years’ Projects
- Project title
- Year and duration
- Description and objectives
- Tech stack used
- Team members and roles
- GitHub repository links
- Project status (completed / archived)

### Past Members & Roles
- Member name
- Role (Lead, Co-Lead, Mentor, Member, etc.)
- Year(s) active
- Team or domain
- Contributions and projects

### Documents & Discussions
- Meeting notes
- Event reports
- Internal guidelines
- Past curricula and lesson plans

---

## 2. Current Year Management

### Team Management
- Create and manage teams
- Assign roles:
  - Lead
  - Co-Lead
  - Mentor
  - Member
- Track team membership changes over time

### Project Management
- Create new projects
- Assign teams and mentors
- Define milestones and timelines
- Track progress and status
- Attach documentation and repositories

---

# GDG – Technical Overview (Version 2 Expansion)

---

## 1. Learning Tracks (8 Total)

The platform supports the following learning tracks:

1. React  
2. Flutter  
3. Node.js  
4. Django  
5. Web3  
6. Beginner Track  
7. Machine Learning (ML)  
8. Data Structures & Algorithms (DSA)  

---

## 2. Task Submission System

### For Tracks 1–7 (React → ML)

- Students submit work using **GitHub repository links**
- Students are grouped under assigned mentors
- Mentors:
  - Review submissions
  - Provide feedback
  - Approve or request improvements

---

### For Track 8 – Data Structures & Algorithms (DSA)

When a student submits a correct solution:

- The system automatically records it
- The solution is added directly to the student’s progress
- No manual submission is required

This ensures:
- Automation
- Real-time progress tracking
- Accuracy of solved problems

---

## 3. Attendance System

Attendance is tracked in two modes:

### A. In-Person Attendance
- Attendance is manually submitted
- If a student is not physically present → marked **Absent**

---

### B. Online (Virtual) Attendance
Attendance is automatically calculated.

A student is marked **Absent** if:

- They attend less than **50% of the session**
  - Example: 25 minutes of a 1-hour class
- They join late and miss a significant portion

⚠️ **Excused absences (approved by mentors) are NOT counted as absences**

---

## 4. Attendance Rules & Elimination Policy

Absence tracking follows this system:

- 🟢 **1 Absence** → Warning  
- 🟡 **2 Absences** → Final Warning  
- 🔴 **3 Absences** → Student eliminated from the course  

This ensures discipline and commitment across all tracks.

---

## 5. Point (Coin) System

Students earn coins based on performance and participation:

- Attend a class → **1 coin**
- Perform well (mentor promotion) → **2 coins**
- Outshine others in the track → **3 coins**

➡️ A high-performing student can earn up to **6 coins per week**

This system encourages:
- Active participation
- Healthy competition
- Consistent improvement

---

## 6. Course Scheduling & Content Management

- Courses are updated every year
- New and improved programs are prepared annually
- New slides are created each year
- Slides are:
  - Released **1 day early for mentors**
  - Released **on class day for students**
- Mentors are assigned before the academic year starts

---

# User Roles & Permissions (Updated)

---

## 1. Technical Lead
- Full access to all tracks
- System-wide control
- Can manage leads, mentors, and students
- Oversee elimination policies

---

## 2. Track Leads
Access limited to their specific track.

Can:
- Manage students
- Assign mentors
- Eliminate students with excess absences
- Monitor performance metrics

---

## 3. Mentors
Directly connected with students.

Can:
- Review submissions
- Provide feedback
- Mark attendance
- Approve excused absences
- Recommend coin rewards

---

## 4. Students
Can:
- View attendance records
- Submit tasks
- Track progress
- View earned coins
- Send heads-up messages (notifications/explanations to mentors)

---

# Tech Stack (Proposed)

### Frontend
- React / Next.js
- Tailwind CSS

### Backend
- Node.js + Express
- REST API

### Database
- PostgreSQL or MongoDB

### Authentication
- Firebase Auth / JWT

### Version Control
- Git & GitHub

---

# Project Structure (Temporary)

```text
gdg-aastu-history/
│
├── frontend/
│   ├── pages/
│   ├── components/
│   └── styles/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── services/
│
├── docs/
│   ├── meeting-notes/
│   ├── curricula/
│   └── reports/
│
└── README.md
```

## Future Enhancements

- Analytics Dashboard
- Alumni Network Integration
- Event Management
- Certificate Generation
- Public vs Internal Access Control

## Project Timeline

| Task                               | Start Date | End Date   |
|------------------------------------|------------|------------|
| Confirm Features                   | Feb 9     | Feb 13    |
| Full Front End Features            | Feb 16    | Feb 20    |
| Prepare and Finalize MVP           | Feb 23    | Feb 27    |
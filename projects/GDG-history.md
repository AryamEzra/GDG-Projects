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

## Core Features

### 1. Historical Archive

#### Past Years’ Projects
- Project title
- Year and duration
- Description and objectives
- Tech stack used
- Team members and roles
- GitHub repository links
- Project status (completed / archived)

#### Past Members & Roles
- Member name
- Role (Lead, Co-Lead, Mentor, Member, etc.)
- Year(s) active
- Team or domain
- Contributions and projects

#### Documents & Discussions
- Meeting notes
- Event reports
- Internal guidelines
- Past curricula and lesson plans

---

### 2. Current Year Management

#### Team Management
- Create and manage teams
- Assign roles:
  - Lead
  - Co-Lead
  - Mentor
  - Member
- Track team membership changes over time

#### Project Management
- Create new projects
- Assign teams and mentors
- Define milestones and timelines
- Track progress and status
- Attach documentation and repositories

---

### 3. Learning Tracks & Classes

The platform supports GDG AASTU’s learning programs:

#### Supported Tracks
- Frontend Development
- Backend Development
- Mobile Development
- Data Structures & Algorithms

#### Class Management
- Course descriptions
- Weekly lesson plans
- Instructors / mentors
- Attendance tracking (optional)
- Learning resources (slides, links, recordings)

---

### 4. Member Activity Tracking

- Track what members are currently working on
- Assigned projects and learning tracks
- Participation in discussions and teams
- Progress across semesters or years

---

## User Roles & Permissions

### Admin
- Full access to all features
- Manage users, teams, projects, and documents

### Leads / Co-Leads
- Manage teams and projects
- Upload documents
- Track member progress

### Mentors
- Supervise projects
- Add feedback and resources
- Track assigned teams

### Members
- View projects and learning materials
- Update personal progress
- Participate in assigned teams

---

## Tech Stack (Proposed)

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

## Project Structure (Temporary)

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

## Future Enhancements

- **Analytics Dashboard**
- **Alumni Network Integration**
- **Event Management**
- **Certificate Generation**
- **Public vs Internal Access Control**

## Project Timeline

| Task                               | Start Date | End Date   |
|------------------------------------|------------|------------|
| Confirm Features                   | Feb 9     | Feb 13    |
| Full Front End Features            | Feb 16    | Feb 20    |
| Prepare and Finalize MVP           | Feb 23    | Feb 27    |
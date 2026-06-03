# Internship Management Platform

> A centralized platform to connect students with internship opportunities, streamline application workflows, and enable companies to manage intern lifecycles — end to end.

---

## Table of Contents

- [Problem Statement](#problem-statement)
- [User Roles](#user-roles)
- [Key Features](#key-features)
- [Workflow Diagram](#workflow-diagram)
- [Wireframes](#wireframes)
- [MVP Definition](#mvp-definition)

---

## Problem Statement

Internship discovery and management is fragmented across email threads, spreadsheets, and disconnected portals. Students miss opportunities due to poor visibility, companies struggle to track applicants, and colleges have no unified view of intern placement activity.

**Goal:** Design a platform that centralizes internship postings, applications, offer management, and progress tracking for all stakeholders — students, companies, and college placement coordinators.

---

## User Roles

### 1. Student
- Browses and applies to internships
- Uploads resume and manages profile
- Tracks application status in real time
- Receives offer letters and submits completion reports

### 2. Company / Recruiter
- Posts internship openings with eligibility criteria
- Reviews and shortlists applicants
- Schedules interviews and sends offer letters
- Tracks intern progress during the internship period

### 3. Placement Coordinator (College)
- Approves company registrations
- Monitors student applications and placement stats
- Generates reports for administration
- Sends bulk notifications and announcements

### 4. College Administration
- Views high-level placement dashboard
- Accesses branch-wise and department-wise internship reports
- No direct involvement in individual applications

### 5. Faculty Mentor (Optional)
- Assigned to students for internship guidance
- Views student internship status and feedback
- Submits mentor evaluation at end of internship

---

## Key Features

### Student Module
- **Profile Builder** — Education, skills, projects, resume upload
- **Internship Discovery** — Filter by domain, location, stipend, duration
- **One-Click Apply** — Apply with saved profile; track status live
- **Application Tracker** — Visual pipeline: Applied → Shortlisted → Interview → Offer → Accepted
- **Offer Management** — View, accept, or decline offer letters
- **Completion Certificate** — Download on internship completion

### Company Module
- **Internship Posting** — Title, description, skills, duration, stipend, eligibility (CGPA, branch)
- **Applicant Dashboard** — View all applicants, filter by skills/CGPA, shortlist candidates
- **Interview Scheduling** — Set slots; students receive automated calendar invites
- **Offer Letter Generation** — Template-based offer letter dispatch
- **Intern Tracker** — Monitor ongoing interns, submit performance feedback

### Placement Coordinator Module
- **Company Verification** — Approve/reject company registrations
- **Drive Management** — Create and manage internship drives
- **Student Eligibility Engine** — Auto-filter eligible students per drive
- **Bulk Notifications** — Email/SMS/in-app alerts for deadlines and drives
- **Analytics Dashboard** — Placement rate, domain-wise stats, stipend ranges

### Admin Module
- **Reports** — Export branch/batch/semester reports
- **User Management** — Manage student, company, and coordinator accounts
- **Platform Settings** — Academic year config, eligibility rules

---

## Workflow Diagram

### End-to-End Internship Workflow

```
┌─────────────────────────────────────────────────────────────────────┐
│                     INTERNSHIP MANAGEMENT PLATFORM                  │
└─────────────────────────────────────────────────────────────────────┘

COMPANY                    COORDINATOR               STUDENT
   │                            │                       │
   │  Register & Submit         │                       │
   │─────────────────────────►  │                       │
   │                            │  Verify & Approve     │
   │  ◄─────────────────────────│                       │
   │                            │                       │
   │  Post Internship           │                       │
   │─────────────────────────►  │  Notify Students      │
   │                            │──────────────────────►│
   │                            │                       │  Browse & Apply
   │                            │                       │◄──────────────
   │                            │                       │
   │  Receive Applications      │                       │
   │◄─────────────────────────────────────────────────  │
   │                            │                       │
   │  Shortlist Candidates      │                       │
   │─────────────────────────────────────────────────► │ Notified
   │                            │                       │
   │  Schedule Interview        │                       │
   │─────────────────────────────────────────────────► │ Calendar Invite
   │                            │                       │
   │  Conduct Interview         │                       │
   │◄──────────────────────────────────────────────────│
   │                            │                       │
   │  Send Offer Letter         │                       │
   │─────────────────────────────────────────────────► │ Accept / Decline
   │                            │                       │
   │  Internship Begins         │                       │
   │──────────────────────────────────────────────────►│
   │                            │                       │
   │  Submit Performance Report │                       │  Submit Work Report
   │─────────────────────────►  │  ◄────────────────────│
   │                            │                       │
   │                            │  Generate Certificate │
   │                            │──────────────────────►│
   │                            │                       │
   │                       Analytics &                  │
   │                       Reports Updated              │
```

### Application State Machine

```
  [Profile Complete]
         │
         ▼
     [Applied]
         │
         ▼
   [Shortlisted] ──── (Rejected) ────► [Closed]
         │
         ▼
  [Interview Scheduled]
         │
         ▼
  [Interview Done]
         │
    ┌────┴────┐
    ▼         ▼
[Offered]  [Rejected]
    │
    ▼
[Accepted / Declined]
    │
    ▼
[Internship Active]
    │
    ▼
[Completed → Certificate]
```

---

## Wireframes

### Student Dashboard

```
┌────────────────────────────────────────────────────────────┐
│  InternHub   Home   Explore   Applications   Profile       │
├────────────────────────────────────────────────────────────┤
│  Welcome back, [Student Name]          Profile: 85% ░░░    │
├────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  12 Open     │  │  3 Applied   │  │  1 Offer     │     │
│  │  Internships │  │              │  │  Received    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
├────────────────────────────────────────────────────────────┤
│  Recommended Internships                         [View All]│
│  ┌──────────────────────────────────────────────────────┐  │
│  │  SDE Intern @ Google    Rs.30k/mo   Delhi   [Apply]  │  │
│  │  ML Intern @ Amazon     Rs.25k/mo  Remote   [Apply]  │  │
│  │  UI/UX Intern @ Adobe   Rs.20k/mo  Noida    [Apply]  │  │
│  └──────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────┤
│  My Applications                                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Google       │ [Shortlisted]  │ Interview: Jul 10   │  │
│  │  Microsoft    │ [Applied]      │ Applied: Jul 2      │  │
│  │  Flipkart     │ [Under Review] │ Applied: Jun 30     │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

### Company / Recruiter Dashboard

```
┌────────────────────────────────────────────────────────────┐
│  InternHub   Dashboard   Post   Applicants   Interns       │
├────────────────────────────────────────────────────────────┤
│  Active Postings: 3     Total Applicants: 148              │
├────────────────────────────────────────────────────────────┤
│  Post New Internship                                       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Title:             [___________________________]    │  │
│  │  Domain:            [___________________________]    │  │
│  │  Duration:          [___________________________]    │  │
│  │  Stipend (Rs./mo):  [___________________________]    │  │
│  │  CGPA Cutoff:       [___________________________]    │  │
│  │  Skills Required:   [___________________________]    │  │
│  │                                  [Post Internship]   │  │
│  └──────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────┤
│  Applicants — SDE Intern Role              [Export CSV]    │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Rank │ Name       │ CGPA │ Skills        │ Action   │  │
│  │   1   │ Student A  │ 9.1  │ React, Node   │[Shortlist]│ │
│  │   2   │ Student B  │ 8.8  │ Python, SQL   │[Shortlist]│ │
│  │   3   │ Student C  │ 8.5  │ Java, Spring  │[Reject]  │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

### Placement Coordinator Dashboard

```
┌────────────────────────────────────────────────────────────┐
│  InternHub   Overview   Companies   Students   Reports     │
├────────────────────────────────────────────────────────────┤
│  Total Students: 2500  │  Applied: 1200  │  Placed: 800    │
│  Active Drives: 8      │  Placement Rate: 64%              │
├────────────────────────────────────────────────────────────┤
│  Pending Company Approvals                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  TechCorp Pvt Ltd     │ SDE Intern    │ [Approve][Reject] │
│  │  DesignStudio LLP     │ UI/UX Intern  │ [Approve][Reject] │
│  └──────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────┤
│  Upcoming Drives                                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Google Intern Drive  │ Jul 10  │ 320 eligible        │  │
│  │  Amazon SDE Intern    │ Jul 14  │ 280 eligible        │  │
│  └──────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────┤
│  [Send Bulk Notification]          [Download Report]       │
└────────────────────────────────────────────────────────────┘
```

---

## MVP Definition

The MVP focuses on the **core loop**: Student applies → Company reviews → Offer sent → Coordinator tracks.

### MVP Scope (Phase 1)

| Feature | Role | Priority |
|---|---|---|
| Student registration and profile creation | Student | Must Have |
| Resume upload | Student | Must Have |
| Internship listing and browsing | Student | Must Have |
| Apply to internship | Student | Must Have |
| Application status tracker | Student | Must Have |
| Company registration | Company | Must Have |
| Post internship opening | Company | Must Have |
| View and shortlist applicants | Company | Must Have |
| Send offer letter | Company | Must Have |
| Coordinator login and dashboard | Coordinator | Must Have |
| Approve/reject company | Coordinator | Must Have |
| Basic placement statistics | Coordinator | Must Have |
| Email notifications (apply, shortlist, offer) | All | Must Have |

### Out of MVP Scope (Phase 2+)

| Feature | Reason Deferred |
|---|---|
| AI resume scoring | Requires NLP model integration |
| Interview scheduling with calendar sync | Third-party API complexity |
| Alumni mentorship module | Non-core to primary workflow |
| Performance feedback portal | Post-offer, lower urgency |
| Mobile app | Web-first approach for MVP |
| Advanced analytics and exports | Admin convenience, not critical path |
| Completion certificate generation | Post-internship phase |

### MVP Success Metrics

- Students can register, build a profile, and apply to at least one internship
- Companies can post an opening and shortlist applicants
- Coordinator can verify a company and view placement count
- Email notifications trigger on: application received, shortlisting, offer dispatch
- End-to-end flow completable in under 10 minutes per user type

---

## Tech Stack (Suggested)

| Layer | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| Auth | JWT + bcrypt |
| File Storage | AWS S3 / Cloudinary (resumes) |
| Email Service | NodeMailer / SendGrid |
| Hosting | Render (backend), Vercel (frontend) |

---

*Covers: User Roles · Key Features · Workflow Diagram · Wireframes · MVP Definition*

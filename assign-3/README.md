# AI-Powered Placement Management Platform

> A full-stack, AI-driven platform that streamlines campus placements — from resume analysis and job matching to candidate ranking and interview preparation.

---

## Table of Contents

- [Overview](#overview)
- [Stakeholder Analysis](#stakeholder-analysis)
- [User Stories](#user-stories)
- [Product Requirement Document (PRD)](#product-requirement-document-prd)
- [Feature Prioritization](#feature-prioritization)
- [Wireframes](#wireframes)
- [System Architecture](#system-architecture)
- [Tech Stack](#tech-stack)

---

## Overview

Current campus placement processes are largely manual — resulting in inefficient candidate screening, missed opportunities, poor communication, and lack of personalized guidance for students. This platform solves that by bringing AI into every stage of the placement lifecycle.

**Core capabilities:**
- AI-powered resume scoring and improvement suggestions
- Smart job matching based on skills and interests
- Automated candidate ranking for recruiters
- Interview preparation with AI-generated question sets
- Centralized placement analytics for officers and administration

---

## Stakeholder Analysis

| Stakeholder | Role | Needs | Pain Points |
|---|---|---|---|
| **Students** | Job seekers | Personalized job recommendations, resume analysis, application tracking | Missing opportunities, poor resume quality, scattered information |
| **Placement Officers** | Manage placements | Student analytics, company coordination, placement reports | Manual tracking, high workload |
| **Recruiters / Companies** | Hiring candidates | Easy candidate filtering, skill matching | Large volume of applications |
| **Faculty Mentors** | Student guidance | Progress monitoring, skill gap identification | Limited visibility into student readiness |
| **College Administration** | Oversight | Placement statistics, reports, ROI measurement | Lack of centralized insights |
| **Alumni** *(optional)* | Mentorship | Connecting with students | No structured interaction platform |

---

## User Stories

### Student

| ID | Story |
|---|---|
| US-1 | As a student, I want AI-powered resume analysis so that I can improve my chances of getting shortlisted. |
| US-2 | As a student, I want personalized job recommendations based on my skills and profile. |
| US-3 | As a student, I want to track all applications from a single dashboard. |
| US-4 | As a student, I want AI-generated interview questions so that I can prepare better. |
| US-5 | As a student, I want notifications about upcoming drives and deadlines. |

### Placement Officer

| ID | Story |
|---|---|
| US-6 | As a placement officer, I want to view eligible students automatically for each company. |
| US-7 | As a placement officer, I want placement statistics and reports. |
| US-8 | As a placement officer, I want automated email communication with students. |

### Recruiter

| ID | Story |
|---|---|
| US-9 | As a recruiter, I want to filter candidates based on skills, CGPA, and certifications. |
| US-10 | As a recruiter, I want AI-ranked candidate lists to reduce screening time. |

### Faculty Mentor

| ID | Story |
|---|---|
| US-11 | As a faculty mentor, I want to identify student skill gaps. |
| US-12 | As a faculty mentor, I want performance reports for assigned students. |

---

## Product Requirement Document (PRD)

### Problem Statement

Current placement processes are largely manual, resulting in inefficient candidate screening, missed opportunities, poor communication, and lack of personalized guidance for students.

### Goals

Create an AI-driven platform that streamlines placement activities through resume analysis, job matching, candidate ranking, interview preparation, and placement analytics.

### Objectives

**Business**
- Increase placement rate by 20%
- Reduce recruiter screening effort by 50%
- Improve overall recruiter satisfaction

**User**
- Better job discovery for students
- Faster application process
- Improved interview readiness

---

### Functional Requirements

#### Student Module
- Registration and login
- Resume upload
- AI resume scoring and feedback
- Personalized job recommendations
- Application tracking dashboard
- Interview preparation assistant

#### Placement Cell Module
- Company and drive management
- Student eligibility filtering
- Bulk notification system
- Placement analytics and reports

#### Recruiter Module
- Company registration
- Job posting
- Candidate search and filtering
- AI-powered candidate ranking

#### Faculty Module
- Student progress dashboard
- Skill gap reports

---

### AI Features

#### Resume Analyzer
Uses NLP to evaluate skills, keywords, experience, and formatting.

Output:
- Resume Score (0–100)
- Improvement suggestions per section

#### Smart Job Matching
Uses skill similarity, past placement data, and student interests.

Output:
- Ranked list of recommended jobs

#### Candidate Ranking
Ranks candidates based on a weighted combination of:
- Resume Score
- Skills match
- CGPA
- Certifications
- Relevant experience

#### Interview Assistant
Generates role-specific and company-specific questions:
- Technical questions
- HR / behavioural questions
- Company-specific questions

---

### Non-Functional Requirements

| Requirement | Description |
|---|---|
| Performance | < 2 sec response time |
| Security | JWT Authentication |
| Scalability | 10,000+ concurrent users |
| Availability | 99.9% uptime |
| Reliability | Automated data backup and recovery |
| Accessibility | Mobile-friendly, responsive UI |

---

## Feature Prioritization

Using the **MoSCoW Method**:

### Must Have ✅
- User Authentication
- Resume Upload
- Job Posting
- AI Resume Analysis
- Student Dashboard
- Application Tracking
- Notifications

### Should Have ⚡
- AI Job Recommendations
- Candidate Ranking
- Placement Analytics
- Interview Question Generator

### Could Have ⭐
- Alumni Mentorship Module
- AI Chatbot
- Mock Interview System
- Skill Learning Recommendations

### Won't Have (Phase 1) ❌
- Video Interview Analysis
- Blockchain-based Certificates
- AR/VR Interview Training

---

## Wireframes

### Student Dashboard

```
┌─────────────────────────────────────────────────────────┐
│  Logo    Dashboard   Jobs   Applications   Profile       │
├─────────────────────────────────────────────────────────┤
│  Welcome, [Student Name]                                 │
├─────────────────────────────────────────────────────────┤
│  Resume Score: 82/100  ████████░░                        │
├─────────────────────────────────────────────────────────┤
│  Recommended Jobs                                        │
│  ┌─────────────────────────────────────────────────┐    │
│  │  SDE Intern @ Google           [Apply Now]       │    │
│  │  Backend Intern @ Amazon       [Apply Now]       │    │
│  │  ML Intern @ Microsoft         [Apply Now]       │    │
│  └─────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────┤
│  Application Status                                      │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Google      │  ✅ Shortlisted                   │    │
│  │  Amazon      │  🔵 Applied                       │    │
│  │  Microsoft   │  🟡 Under Review                  │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

### Placement Officer Dashboard

```
┌─────────────────────────────────────────────────────────┐
│  Logo    Dashboard   Students   Companies   Reports      │
├─────────────────────────────────────────────────────────┤
│  Total Students: 2500        Placed Students: 1800       │
│  Placement Rate: 72%                                     │
├─────────────────────────────────────────────────────────┤
│  Upcoming Drives                                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Amazon Drive          │  2025-07-10  [View]     │    │
│  │  Google Internship     │  2025-07-15  [View]     │    │
│  │  Adobe Hiring          │  2025-07-20  [View]     │    │
│  └─────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────┤
│  Placement Analytics                                     │
│  Branch-wise Placements  |  Highest Package: 42 LPA     │
│  Average Package: 12 LPA |  Offers This Year: 1800       │
└─────────────────────────────────────────────────────────┘
```

### Recruiter Dashboard

```
┌─────────────────────────────────────────────────────────┐
│  Logo    Dashboard   Post Job   Candidates               │
├─────────────────────────────────────────────────────────┤
│  Create New Job Posting                                  │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Job Title:       [________________________]     │    │
│  │  Skills Required: [________________________]     │    │
│  │  CGPA Cutoff:     [________________________]     │    │
│  │                            [Post Job]            │    │
│  └─────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────┤
│  AI-Ranked Candidates                                    │
│  ┌─────────────────────────────────────────────────┐    │
│  │  🥇 Rank 1: Student A   Score: 94  [View Profile]│    │
│  │  🥈 Rank 2: Student B   Score: 91  [View Profile]│    │
│  │  🥉 Rank 3: Student C   Score: 88  [View Profile]│    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

---

## System Architecture

```
                      ┌──────────────────┐
                      │  React Frontend  │
                      │  (Tailwind CSS)  │
                      └────────┬─────────┘
                               │ REST / WebSocket
                               ▼
                      ┌──────────────────┐
                      │  Node.js + Express│
                      │  API Gateway     │
                      └────────┬─────────┘
                               │
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
  ┌──────────────┐   ┌──────────────────┐   ┌──────────────────┐
  │  PostgreSQL  │   │   AI Service     │   │  Notification    │
  │  (Primary DB)│   │  OpenAI API      │   │  Service         │
  └──────────────┘   │  Sentence Trans. │   │  (Email / Push)  │
                     │  LangChain       │   └──────────────────┘
                     └──────────────────┘
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| AI / NLP | OpenAI API, Sentence Transformers, LangChain |
| Auth | JWT |
| Cloud | AWS / Azure |

---

*This document covers the full project package: Stakeholder Analysis, User Stories, PRD, Feature Prioritization, Wireframes, and System Architecture.*

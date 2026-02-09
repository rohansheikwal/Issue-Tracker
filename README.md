# Issue-Tracker
📌 Project Description

The Online Complaint / Issue Tracker System is a mini full-stack web application that allows users to submit complaints and enables an admin to manage them through a dashboard. The system is built without using any database, and all complaints are stored using in-memory data structures on the server.

This project demonstrates the use of Node.js, Express.js, and Vanilla JavaScript to build a basic RESTful web application.

🎯 Objectives

To build a basic full-stack application

To understand REST API implementation

To manage data without using a database

To implement user and admin modules

🛠 Technology Stack

Frontend: HTML, CSS, Vanilla JavaScript

Backend: Node.js, Express.js

Database: ❌ Not used (In-memory storage)

👤 User Module

Users can:

Submit a complaint

Receive an auto-generated complaint ID

View confirmation message after submission

Each complaint is stored with:

Complaint ID

User name

Issue description

Status (default: pending)

🛠 Admin Module

Admin can:

View all complaints

View complaint statistics (Total, Pending, Resolved, Rejected)

Update complaint status

Delete complaints

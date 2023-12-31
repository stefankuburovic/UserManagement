# Angular User Management App

This is an Angular application for managing user data using Akita state management library.

## Features

- Display a table of users with their ID, name, and active status.
- Toggle the active status of users.
- Add new users through a modal.
- Validate user input to ensure non-empty names.
- Enforce rules for enabling the "Add User" button.

## Tech Stack

- Angular 16.2.0
- Akita 8.1.0
- RxJS 7.8.0

## Getting Started

1. Clone the repository: **https://github.com/stefankuburovic/UserManagement.git**
2. Navigate to the project directory: **cd UserManagement**
3. Install dependencies: **npm install**
4. Run the application: **ng serve**

The app will be accessible at `http://localhost:4200`.

## Usage

- The app displays a table of users with their information.
- Use the "Toggle Active" button to change the active status of users.
- Click the "Add User" button to open a modal and add new users.

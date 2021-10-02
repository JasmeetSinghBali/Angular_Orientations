> ## User Management App 🐱‍🚀

> Tech/Tools

- [x] MEAN
- [x] npm i -g @angular/cli (ng new appName,ng build)
  - [x] commands to generate boilerplate for components,services etc..
- [x] dev resources -> https://angular.io/guide/setup-local#install-the-angular-cli

> ### Blueprint

- [ ] um_api

  - [ ] Login (POST)
  - [ ] Signup (POST)
  - [ ] Create User (POST)
  - [ ] Get user info (GET)
  - [ ] Edit user (PUT)
  - [ ] Delete user (DELETE)

- [ ] umDashboard

  - [ ] Components

    - [x] Header component
    - [x] Reusable Button component with Custom Output Event Emitter that triggers a function that ultimately loads a add user form
    - [ ] Add user using angular reactive Form, should cover the following form elements - Input (email, name, phone number) & creation date & time

    - [ ] Show a List of all users using table - Make use of Observables, Promises, async await wherever necessary Table should have an edit option which will open a form with preloaded values of selected user

    - [ ] Edit User form

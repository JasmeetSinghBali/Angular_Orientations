> ## User Management App 🐱‍🚀

> Tech/Tools

- [x] MEAN
- [x] npm i -g @angular/cli (ng new appName,ng build)
  - [x] commands to generate boilerplate for components,services etc..
- [x] dev resources -> https://angular.io/guide/setup-local#install-the-angular-cli

> ### Blueprint

- [x] um_api

  - [x] Custom Error Handler & JWT as Services
  - [x] Login (POST)
  - [x] Register (POST)
  - [x] whoami (GET)
  - [x] Refresh token (POST)
  - [x] Logout/Terminate Refresh token stored in DB (POST)
  - [x] Create User (POST)
    - [x] admin only
  - [x] Edit user (PUT)
  - [x] Extra's/AddOn's
    - [x] Rate limiters
    - [x] cluster
    - [x] load tester

> ### API Endpoints

> REGISTER (POST) http://localhost:5000/api/register
> **By default creates a user with role as customer**

                      # request body raw json
                      {
                            "name": "John",
                            "email": "John@doe.co",
                            "password": "Jagtamba@007",
                            "repeat_password":"Jagtamba@007"
                      }

                      # 200 response
                      {
                        "access_token": "...",
                        "refresh_token": "..."
                      }

> LOGIN (POST) http://localhost:5000/api/login

                        # request body raw json
                        {
                            "email":"John@doe.co",
                            "password":"Jagtamba@007"
                        }
                        # 200 response
                        {
                          "access_token": "..."
                        }

> WHOAMI (GET) http://localhost:5000/api/whoami

**Requires Access Token (received after LOGIN route is hit)**

                        # request header
                        authorization: Bearer Accesstoken

                        # 200 response
                        {
                          "_id": "715ada89ui682143f6293",
                          "name": "John",
                          "email": "John@doe.co",
                          "role": "Customer",
                          "createdAt": "2021-10-04T10:42:14.416Z"
                        }

> REFRESH (POST) http://localhost:5000/api/refresh

**Requires Refresh Token (received after LOGIN route is hit)**

                        # request body json raw
                        {
                            "refresh_token": "..."
                        }
                        # 200 response
                        {
                            "access_token": "..."
                            "refresh_token": "..."
                        }

> LOGOUT(removes Whitelisted Refresh Tokens from DB) (POST) http://localhost:5000/api/logout

**Requires Refresh & Access Token (received after LOGIN route is hit)**

                        # request body json raw
                        {
                            "refresh_token": "..."
                        }
                        # request body header
                        authorization: Bearer AccessToken

                        # 200 response
                        {
                          "status": "User Logged Out, refresh token removed!!"
                        }

---

> ## CRUD User Managment Routes

> CREATE NEW USER(ADMIN ONLY) (POST) http://localhost:5000/api/user

**Requires Access Token (received after LOGIN route is hit)**

                            # req-header
                            authorization: Bearer AccessToken
                            # req-body json raw
                            {
                                "name":"XYZ",
                                "email":"XYZ@abc.com",
                                "password":"12345",
                                "role":"customer"
                            }

> UPDATE EXISTING USER (User & Admin) (PUT) http://localhost:5000/api/user/:id

**Requires Access Token (received after LOGIN route is hit)**
**id can be retrived by hitting the whoami route by normal users**

                            # req-header
                            authorization: Bearer AccessToken
                            # req-body json raw
                            {
                                "name":"UpdatedName",
                                "email":"UpdatedEmail",
                                "password":"t12345@ISss",
                                "role":"UpdatedRole"
                            }
                            # req-params (user id whose name,email,password,role you want to change)
                            :id

> ALL USERS http://localhost:5000/api/user (GET) (ADMIN ONLY)

                            # req-header
                            authorization: Bearer AccessToken

**Requires Access Token (received after LOGIN route is hit)**

- [ ] umDashboard

  - [ ] Components

    - [x] Header component
    - [x] Reusable Button component with Custom Output Event Emitter that triggers a function that ultimately loads a add user form
    - [ ] Add user using angular reactive Form, should cover the following form elements - Input (email, name, phone number) & creation date & time

    - [ ] Show a List of all users using table - Make use of Observables, Promises, async await wherever necessary Table should have an edit option which will open a form with preloaded values of selected user

    - [ ] Edit User form

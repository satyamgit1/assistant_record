# API_USERS_CRUD WITH MODEL, CONTROLLERS, ROUTES
# Express.js User Management App

This is an Express.js server application for managing user data.

## Installation

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install dependencies.
5. Run `node app.js` to start the server.

## Usage

Users can interact with the application through API endpoints. Here are the available endpoints:

 ## Routes
GET /api/users: Retrieve all users.
POST /api/users: Create a new user.
GET /api/users/:id: Retrieve a user by ID.
PUT /api/users/:id: Update a user by ID.
PATCH /api/users/:id: Update a user partially by ID.
DELETE /api/users/:id: Delete a user by ID.

 ## Controller Functions
handleGetAllUsers: Retrieve all users from the database.
handleGetUserById: Retrieve a user by their ID.
handleUpdateUserById: Update a user by their ID.
handleDeleteUserById: Delete a user by their ID.
handlePutUserById: Update a user by their ID (PUT method).
handleCreateNewUser: Create a new user.


 ## Model
The User model defines the schema for user data in the MongoDB database
firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    // Add any additional constraints or validations here
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
    // Add any additional constraints or validations here
  },
}, { timestamps: true });



## Running the Application

To run the application locally, execute the following commands:


## Technologies Used

-Node.js
-Express.js
-MongoDB
 - Mongoose
- fs (File System)

## File Structure

- `index.js`: Main application file.
- `MOCK_DATA.json`: Mock user data file.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

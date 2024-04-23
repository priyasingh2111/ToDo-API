# ToDo-API

ToDo-API is a simple RESTful API for managing a to-do list. It is built with Node.js and Express.js and supports CRUD operations for creating, reading, updating, and deleting tasks.

## Features

- Create new tasks with a unique ID and description
- Retrieve a list of all tasks or a specific task by ID
- Update tasks with new information
- Delete tasks by ID

## Project Structure

The project consists of two main files:

- `server.js`: The main server setup, including middleware and API endpoints.
- `crud.js`: Contains CRUD operations for managing tasks.

## Prerequisites

To run this project, you need:

- Node.js (v12 or later recommended)
- npm (Node Package Manager)

## Setup Instructions

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/priyasingh2111/ToDo-API.git

2. Navigate to the project directory:   
     ```bash
     cd ToDo-API

3. Install the required dependencies:
    ```bash
    npm install

4. Start the server:
    ```bash
    npm start

    
By default, the server runs on http://localhost:3000.


## API Endpoints

The following endpoints are available:

- **Create a new task**: `POST /api/tasks`
  - **Returns**: The created task with a unique ID

- **Get all tasks**: `GET /api/tasks`
  - **Returns**: A list of all tasks

- **Get a task by ID**: `GET /api/tasks/:id`
  - **Parameters**: `id` (task ID)
  - **Returns**: The task with the specified ID, or a 404 error if not found

- **Update a task by ID**: `PUT /api/tasks/:id`
  - **Parameters**: `id` (task ID)
  - **Request body (JSON)**: `{ "description": "Updated description", "status": "complete" }`
  - **Returns**: The updated task, or a 404 error if not found

- **Delete a task by ID**: `DELETE /api/tasks/:id`
  - **Parameters**: `id` (task ID)
  - **Returns**: A success message or a 404 error if not found

## Testing

To test the API, you can use a tool like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to send HTTP requests to the server and verify the responses. Ensure that the server is running before testing.

## License

This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for more details.

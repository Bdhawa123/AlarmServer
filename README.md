## Project Overview

This repository contains a Node.js backend application designed to manage medication records and user information.

### Key Components

- **`index.js`**: Entry point for the server.
- **`server.js`**: Server configuration and initialization.
- **`services/medService.js`** and **`controllers/medController.js`**: Handle business logic and API endpoints related to medications.
- **`models/Medication.js`** and **`models/User.js`**: Define data schemas and interact with the database.
- **`repositories/repo.js`**: Abstracts database operations.

### Dependencies

- **Express**: Web framework for handling HTTP requests.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **Sequelize**: ORM for relational databases like PostgreSQL, MySQL, etc.

### Setup Instructions

1. Ensure you have Node.js installed.
2. Run `npm install` to install dependencies.
3. Configure your database connection in `src/config/database.js`.
4. Start the server with `node index.js`.

### Contributing

Contributions are welcome! Please follow the code of conduct and submit pull requests for review.
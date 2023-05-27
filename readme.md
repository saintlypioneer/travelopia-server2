# Travelopia

Travelopia is a travel planning application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to plan their trips by providing various travel-related information and features.

## Getting Started

To get started with Travelopia, follow the instructions below.

### Prerequisites

- Node.js (version 12 or higher)
- MongoDB (Make sure MongoDB is installed and running on your machine)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project folder:

   ```
   cd travelopia
   ```

3. Install the dependencies for both the client and server:

   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

### Configuration

1. Open the `.env` file in the `server` directory and configure the following environment variables:

   - `PORT` - The port number on which the server will run (default: 3002)
   - `MONGODB_URI` - The URI for connecting to your MongoDB database

2. Open the `config.js` file in the `client/src` directory and update the `API_URL` variable with the backend server URL (default: http://localhost:3002).

### Running the Application

1. Start the server:

   ```
   cd server
   npm start
   ```

   The server will start running on the specified port (default: 3002).

2. Start the client:

   ```
   cd client
   npm run start
   ```

   The client application will open in your default web browser at http://localhost:3000.

## Usage

- Register a new user account or log in with an existing account.
- Explore various travel destinations, attractions, and accommodation options.
- Create and manage your travel itineraries.
- Save your favorite places and attractions for future reference.
- Interact with other users through comments and ratings.
- Customize your profile settings.

## Directory Structure

The project directory structure is as follows:

```
travelopia/
  ├── client/                    # Client-side code
  │   ├── public/                # Public assets
  │   ├── src/                   # Source code
  │   │   ├── components/        # React components
  │   │   ├── pages/             # Page components
  │   │   ├── services/          # API services
  │   │   ├── utils/             # Utility functions
  │   │   ├── App.js             # Main App component
  │   │   ├── index.js           # Entry point
  │   │   └── ...                # Other configuration files
  │   ├── package.json           # Client dependencies and scripts
  │   └── ...
  ├── server/                    # Server-side code
  │   ├── controllers/           # Route controllers
  │   ├── models/                # Mongoose models
  │   ├── routes/                # Express routes
  │   ├── services/              # Business logic
  │   ├── config.js              # Configuration file
  │   ├── index.js               # Server entry point
  │   └── ...                    # Other configuration files
  ├── .env                       # Environment variables
  ├── .gitignore                 # Git ignore rules
  ├── package.json               # Server dependencies and scripts
  └── README.md                  # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute to Travelopia, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes

 to your forked repository.
5. Submit a pull request to the main repository.

Please make sure to follow the code style and conventions used in the project.

## License

This project is licensed under the [MIT License](LICENSE).

Happy traveling with Travelopia!
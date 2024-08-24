# RentOk-Assignment

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/tknishh/rentok-assignment.git
   cd my-chat-assistant
   ```

2. Install dependencies for both backend and frontend:
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following content:
     ```
     DATABASE_URL=your_database_url
     OPENAI_API_KEY=your_openai_api_key
     ```

4. Start the backend server:
   ```sh
   cd backend
   npm start
   ```

5. Start the frontend development server:
   ```sh
   cd frontend
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Architecture

- **Backend**: Node.js with Express, Sequelize for ORM, and Socket.io for real-time communication.
- **Frontend**: React with React Router, Socket.io-client for real-time communication, and Intro.js for tutorials.

## API Endpoints

- `POST /api/chat`: Endpoint to handle chat messages.

## Database Schema

- **User**: Stores user information.
- **Message**: Stores chat messages.
- **Conversation**: Stores conversation details.

## Deployment Instructions

1. Set up a server (e.g., AWS, Heroku).
2. Install Node.js and npm on the server.
3. Clone the repository to the server.
4. Set up environment variables on the server.
5. Install dependencies and start the backend and frontend servers.

## Live Demo

- [Live Demo Link](https://your-live-demo-link.com)

## Video Demonstration

- [Video Link](https://your-video-link.com)

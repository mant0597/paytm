const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes/index');
const { connectDb } = require('./db');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    optionsSuccessStatus: 200
  }));
app.use(express.json());

app.use('/api/v1', rootRouter);

const startServer = async () => {
  try {
    await connectDb();
    app.listen(3000, () => {
      console.log('Connected to port 3000');
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();
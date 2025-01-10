const express = require('express');
const connectDB = require('./DB/db');
const cors = require('cors');
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();


const testRoutes = require('./routes/testRouter'); // Import routes
const authRoute = require('./routes/authRouter'); // Import routes
const loginRouter = require('./routes/authRouter')



const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

const app = express(); 

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Route
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/auth", loginRouter);



// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


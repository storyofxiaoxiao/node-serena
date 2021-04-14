import express from 'express';
import bodyParser from "body-parser";

// user api
import userRoutes from "./routes/users";

const app = express();
const PORT = 5000;
app.use(bodyParser.json());

app.use('/users', userRoutes);

/**
 * expecting a get request
 * 1-path
 * 2-callback function
 */
app.get('/', (req, res) => {
    console.log('[TEST]!')
    res.send('Hello From Homepage!')
});
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`)
})
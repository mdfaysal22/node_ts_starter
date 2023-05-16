import express, {Application} from "express"
import cors from 'cors';


// app & port 
const app : Application = express();

// Middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

export default app;
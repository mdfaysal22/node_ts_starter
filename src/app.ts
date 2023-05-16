import express, {Application} from "express"
import cors from 'cors';
import router from "./modules/app/user/user.router";


// app & port 
const app : Application = express();

// Middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routers ---- 


app.use("/api/v1/user", router);



export default app;
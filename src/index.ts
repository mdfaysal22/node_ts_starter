import app from './app';
import dotenv from "dotenv";
import { connect } from './modules/util/dbConnect';
import logger from './modules/util/logger';
import router from './router';


// env File configuration
dotenv.config();

// Server Port
const port = process.env.PORT || process.env.port;

const startServer = async() => {
    try{
        await connect();
        app.use(router);
        app.listen(port, () => {
            logger.info(`server is running by ${port}`)
        })
    }
    catch(error){
        logger.error(error)
    }
}

startServer()
import express, { Request, Response } from "express";
const router  = express.Router();

router.get('/', (req : Request, res: Response) => {
    res.send("Hello")
})

// User router
router.get("/user", (req: Request, res: Response) => {
    res.send("Welcome User");
})



export default router;
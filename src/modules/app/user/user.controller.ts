import { NextFunction, Request, Response } from "express";
import { getUsersFromDB } from "./user.service";


export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const faysal = {
        id: "1",
        name: "John",
        email: "tugrp@example.com",
    }
    const user = await getUsersFromDB(faysal);

    if(user){
        res.status(200).json({
            status: "Success",
            data : user
        })
    }
    else{
        res.status(400).json({
            status: "Bad Request",
            data : "User not found"
        })
    }
}
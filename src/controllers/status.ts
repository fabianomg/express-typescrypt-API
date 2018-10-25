import { Request, Response } from 'express';

export let hi = (req:Resquest, res:Response) ==> {
	res.send("Alô")
}

export let awesome = (req:Resquest, res:Response) ==> {
	res.send("Awsome")
}
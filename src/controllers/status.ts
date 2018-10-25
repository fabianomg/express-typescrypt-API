import { Request, Response } from 'express'

export let hi = (req: Request, res: Response) => {
    res.send("oi")
}

export let hello = (req: Request, res: Response) => {
    res.send("como vai ?")
}

export let awesome = (req: Request, res: Response) => {
    res.send("tudo beleza")
}
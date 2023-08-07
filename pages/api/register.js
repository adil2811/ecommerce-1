import React from 'react'
import User from '@/models/User';
import {mongooseConnect} from "@/lib/mongoose";

export default async function handler(req,res) {
    if(req.method === 'POST'){
    await mongooseConnect();

    const {name , email ,password} = req.body

    const user = await User.create({ name, email , password})

    res.status(201).json({ user })
    }

}

// api/password-protect.ts
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from 'cookie';
export default async function handler(req, res){

    if(req.method !== "POST"){
        res.status(405).send("Method Not Allowed")
    }
    const password = req.body.password;
    console.log(password);
    if(process.env.PASSWORD_PROTECT === password){
        const cookie = serialize('login', 'true', {
            path: '/',
            httpOnly: true
        })

        res.setHeader('Set-Cookie', cookie)
        // res.redirect(302, req.body.path)
        res.redirect(302, "/")

    } 
    else {
        // const url = new URL("/password-protect", req.headers["origin"])
        // url.searchParams.append("error", "Incorrect Password")
        // res.redirect(url.toString())
        res.redirect(302, "/password-protect")
        
        // throw new Error('Invalid password');
    }
}
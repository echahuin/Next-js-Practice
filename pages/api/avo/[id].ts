import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database'
import { useRouter } from 'next/router'

const allAvos = async (request:NextApiRequest , response:NextApiResponse)=>{
    
    const id = request.query.id
    const db = new DB()
    const entry = await db.getById(id as string)

    response.statusCode = 200
    response.setHeader('content-type', 'aplication/json')
    response.end(JSON.stringify({entry}))

    // response.status(200).json({entry})
}
export default allAvos
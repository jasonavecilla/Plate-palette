import { NextResponse } from "next/server"
import axios from 'axios'

export async function GET(req) {

    const query = (req.url).split('=')[1]

     const options = {
        method: "GET",
        url: "https://tasty.p.rapidapi.com/recipes/list",
        params: {
          from: "0",
          size: "20",
          q: `${query}`,
        },
        headers: {
          "X-RapidAPI-Key": process.env.API_KEY,
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      };

      const response = await axios.request(options)
   
    return NextResponse.json(response.data)
}
import exp from "constants"


import got from "got"

export async function Checkip(ip:string) {
    const response = await got("http://ip-api.com/json/"+ip+"?fields=16977437",{
    });
    if(response.statusCode != 200 || 201){

        new Error("status code is not  200 or 201 its "+response.statusCode)
      }
      console.log(response.body)
      return JSON.parse(response.body)
}



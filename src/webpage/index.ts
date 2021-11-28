//const puppeteer = require("puppeteer")
import * as puppeteer from "puppeteer"
import { buffer } from "stream/consumers";

var instsance = null
var login = false;

export async function initalise(){
    if (login != false) return ;
    console.log("Initialising puppeteer")
    login= true;
    instsance = await puppeteer.launch({headless:false})
    
}

export async function getwebpage(url:string) {

    var page:puppeteer.Page = await instsance.newPage({width:1024,height:768})
    await page.goto(url,{

        waitUntil: "networkidle2"
    })
    await page.waitForTimeout(1000);
    const imageBuffer = await page.screenshot({
        type:"png",
        
        
        
      });
      console.log(imageBuffer)
    page.close()
    return imageBuffer
}
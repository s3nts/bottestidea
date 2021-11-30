import csv from 'csvtojson';
import fs from "node:fs/promises"
import { dataloc } from "../config"
var Papa = require('papaparse')

var data:[any] = [{}];
export async function intialise (){
    var loc =  dataloc + "/urlhaus.csv"
    
    var raw = await (await fs.readFile(loc)).toString()
   // var faile = await csv({noheader: true }).fromString(raw)
   var faile = await Papa.parse(raw,{
	header:true,
	skipEmptyLines: true, //other option is 'greedy', meaning skip delimiters, quotes, and whitespace.
    comments:true
})
    await console.log(faile)
    data = faile.data
}


export async function isscamurl (url:string ){

   for (let index = 0; index < data.length; index++) {
       const element = data[index];
       if(element.url == url){
           return "true";
       }
       
   }
   return "false";
}
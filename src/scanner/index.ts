import { dnsLookupIpVersionToFamily } from "got/dist/source/core/utils/dns-ip-version";
import * as dns from "dns/promises"
import { Checkip } from "./iprep";
import { Embed, SlashCommandBuilder } from "@discordjs/builders";
import { registercommand } from "../discordbot/slashcommands";
import { CommandInteraction, Interaction, MessageAttachment } from "discord.js";
import { Importinteraction } from "../discordbot";
import { getwebpage } from "../webpage";
const safebrowsingapi = require('@googleapis/safebrowsing')



export function instalisescan(){

//safebrowsingapi.in
var scan  = new SlashCommandBuilder().setName("scan-url").setDescription("Quick Scan of a webiste").addStringOption(Option => Option.setName("link").setDescription("website").setRequired(true))

registercommand(scan)

Importinteraction(scannerinteraciton)

}


export async function scanurl(url:string){
var result = <any>{
}

var dnsq = await extractHostname(url)
result.ip = {}
var ip = (await dns.lookup(dnsq)).address
result.ip = await Checkip(ip)
result.ip.addr= ip


return result


}




function extractHostname(url) {
    var hostname;
   
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}


async function scannerinteraciton(e:Interaction) {

    var event  = <CommandInteraction>e
	const { commandName } = event;
	await event.deferReply()
    

    if (commandName === 'scan-url') {
        var url = await event.options.getString("link")
    var embed = await urlembedbuilder(url)
	await event.editReply({embeds:[embed],/*attachments:[new MessageAttachment(await getwebpage(url))]*/});
  //  event.editReply({embeds:[new Embed().setTitle("no")]})
	}


}

async function  urlembedbuilder(url:string) {
    try{
    var scan:any = await scanurl(url)
    var embed = new Embed()
    var ipin = await splitobjecttostring(scan.ip)
    embed.addField({name:"IP", value:ipin,inline:true})
  //  embed.setImage("attachment://unkonwn.png")
    

    return embed;
    }catch{
        var embed = new Embed()
        embed.setTitle("An Error occured")
        return embed
    }
}

async function splitobjecttostring(objecte) {
    var string = ""
    for (const property in objecte){
        string += `${property} : ${objecte[property]} \n`

    }
    return string

}
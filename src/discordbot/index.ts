
import * as config from "../config"
import {Activity, Client, CommandInteraction, Intents, Interaction, Presence,PresenceStatusData} from "discord.js"
import exp from "constants";
import { setTimeout } from "timers";
import { registerslashcommands } from "./slashcommands";

export var bot:Client = new Client({intents:[]});
var login: boolean = false;

export function startbot(){
    
    if (login != false) return ;
    console.log("Initialising Discord Bot")
    bot.login(config.token)
    login= true;

}

bot.on('ready', () => {
    console.log("Discord Bot Started")
    bot.user.setActivity("d̶̤̪͇́́̀͑̒̀̀̀͋̈́͠ͅo̴̢͎̟̩̩̼͂́͝ͅ ̵̹̗̮͖̳̱͔̹̞̯̪̗͇͈̎͐̈͐̒̈́͋͗͋̌͌͋n̷̛̼̲̖̓͋͛ǫ̸̢̨͚̩̳̬̹̺̭̥̯̥́̎͌̋̽͝t̶̢̛̩̪͉̞̻̭̩̰̝͔̳̄̅̽͒̅̎̓̀̐͐̐̈́̄͜ ̸̝̤̮̐͑̄̑͘͠ḃ̸̨̨͔̘͎̀̅̎͛́̓͌͆̌͒̕͝͝ḛ̸̡̛͓̳͇̭̗̹͕̳̱̠̾̉̊̊̇̂̄̕̚͜ ̷̨̢̖̳̘̮̖̮̙̦͙̥̺̂̕͝͠ä̶͕̫̻̞̦̟̦̦́́̈̽͘͠͝f̶̡̪̻̲̭̭̪͈̭̅͗̔̃̄͑́͗̓͘ͅŗ̵͍̮̝͚̣̠͈̦̯̳̥̲͖̈́͐͗̀͒̃̿̍͑̔̆̕͜͠͠á̸̝͎̹͆͊̅͘͘͝͝͠ͅȋ̷̢̧̡̢͕̼̙͇̯̣̙͛͂̀̄́͜d̷̞̰̯̮̩̰̞̬͔̽̅ͅ")

    
    setTimeout(registerslashcommands,10000)
})

export enum discord_status_type{
    dnd = "dnd",
    idle = "idle",
    online = 'online'

}

export async function SetPresence(Status:string,Type:discord_status_type = discord_status_type.online) {
    await bot.user.setPresence({status:Type, activities: [{type:"WATCHING",name:Status }]})
}

export  function Importinteraction(Interactionevent:(a: Interaction) => void) {
    bot.on('interactionCreate',Interactionevent)
    console.log("Discord Bot Interaction Imported")
}



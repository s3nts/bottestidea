import { clientid, token } from "../config";

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const rest = new REST({ version: '9' }).setToken(token);

const commands = [
        
]

export function registercommand(command){

    commands.push(command.toJSON())
}
 
export function registerslashcommands(){

 
    rest.put(Routes.applicationGuildCommands(clientid,"913655542055051304"), { body: commands  })
        .then(() => console.log('Discord Bot Successfully registered application commands.'))
        .catch(e =>{
            console.error(e)
        });

}
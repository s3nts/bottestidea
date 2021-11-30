
import * as dbot from "./discordbot"
import { instalisescan, scanurl } from "./scanner"
import { intialise } from "./scanner/urlhaus"
dbot.startbot()



instalisescan()
intialise()

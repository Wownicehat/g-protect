# g-protect
## G-Protect discord raid protection bot
G-Protect is a discord bot to protect your server against raids

## Commands
The default prefix is `.`
| Command | Arguments | Help |
|---------|-----------|------|
|.help|None|Will give you a list of commands|
|**Blacklist**|||
|.check|None|Will check every users on your server for blacklisted one, and ban them|
|.verify|ID|Will check if the user ID is in the blacklist and tell you why|
|.bc|None|Will check your server for blacklisted user, but doesent ban them|
|**Tools**|||
|.info|[mention]|Will give you informations about this user|
|.purge|Number between 1 and 100|Will purge **x** messages
|.admins|None|Will list the users with __ADMINISTRATOR__ permission on this server|
|.stats|None|Will give you informations about the server|
|**Moderation**||**softban**: The user won't see channels / messages|
|.kick|[mention] (reason)|Will kick the user with the reason|
|.ban|[mention] (reason)|Will ban the user with the reason|
|.softban|[mention] (Reason)|Will soft-ban the user with the reason|
|.unsoftban|[mention] (Reason)|Will un-soft-ban the user with the reason|
## Credit
- TheHunt3r (<@638840362663804959>): dev
- RayanFR (<@133712709446402048>): Host / dev
- Anatik (<@594913205638135814>): Dev web (🤢)
- John-Duckesent (<@316913806997585921>, me): Main dev
## Dependencies
- discord.js
- mysql
- Jimp

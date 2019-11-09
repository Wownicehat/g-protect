cache = []
var con;
module.exports = {
	get: (server, param) => {
		if(cache[server] != undefined && cache[server][param] != undefined)
			return new Promise((r)=>{
				r(cache[server][param]);
			})
		return new Promise((resolve, reject)=>{
			con.query(`SELECT value FROM discord_params WHERE serverid = ? AND name = ?`, [server, param], (err, rows) => {
				if(rows.length >= 1)
				{
					resolve(rows[0].value);
				}else{
					reject("No rows for said param")
				}
  			});
		});
	},
	set: (server, param, value) => {
		con.query(`SELECT value FROM discord_params WHERE serverid = ? AND name = ?`, [server, param], (err, rows) => {
			if(rows.length >= 1)
			{
				con.query(`UPDATE discord_params SET value = ? WHERE serverid = ? AND name = ?`, [value, server, param]);
				if(cache[server] == undefined)
					cache[server] = []
				cache[server][param] = value
			}else{
				con.query(`INSERT INTO discord_params(serverid, name, value) VALUES(?, ?, ?)`, [server, param, value]);
			}
  		});

	},
	clearCache: (server) => {
		cache[server] = [];
	},
	setConn: (conn) => {
		con = conn;
	}
}
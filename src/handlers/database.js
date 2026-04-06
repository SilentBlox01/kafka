const guildSchema = require("../schemas/guild")

module.exports.fetchGuild = async function(key) {
    if (guildSchema.db.readyState !== 1) {
        return null;
    }

    let guildDB = await guildSchema.findOne({ id: key });

    if(guildDB){
        return guildDB;
    }

}

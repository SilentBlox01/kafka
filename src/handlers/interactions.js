const { readdirSync, existsSync } = require("fs");

module.exports = async (client) => {

    if (existsSync("src/interactions/buttons/")) {
        readdirSync("src/interactions/buttons/").filter(files => files.endsWith(".js")).forEach(file => {
            const interactions = require("../interactions/buttons/" + file)
            client.interactions.set(file.slice(0, -3), interactions)
        })
    }
    
    if (existsSync("src/interactions/selectmenus/")) {
        readdirSync("src/interactions/selectmenus/").filter(files => files.endsWith(".js")).forEach(file => {
            const interactions = require("../interactions/selectmenus/" + file)
            client.interactions.set(file.slice(0, -3), interactions)
        })
    }
    

}

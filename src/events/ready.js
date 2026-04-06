const mongoose = require("mongoose");

module.exports = async (client) => {

    console.log("Hello World.")
    console.log(`Prefix: ${client.prefix}`)

    if (!client.config.MONGOURL) {
        console.log("MongoDB disabled: MONGOURL is not set. Running without persistence.");
        return;
    }

    try {
        await mongoose.connect(client.config.MONGOURL);
        console.log("Connected with MongoDB");
    } catch (error) {
        console.log("MongoDB connection failed. Running without persistence.");
        console.error(error);
    }

}

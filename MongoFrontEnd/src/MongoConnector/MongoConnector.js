const { MongoClient } = require('mongodb');
async function MongoTestCon() {

    const uri = "mongodb+srv://shubhamv:password_123@reactdemo.1usly.mongodb.net/ReactDemo?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        var dbList = await listDatabases(client);
        var dbArray = [];
        dbList.databasesList.databases.forEach(db => {
            dbArray.push(db.name);
        });

        return new Promise(resolve => {
            setTimeout(() => resolve({ dbArray }), 3000)
        })
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }

}

async function listDatabases(client) {
    var databasesList = await client.db().admin().listDatabases();

    return new Promise(resolve => {
        setTimeout(() => resolve({ databasesList }), 3000)
    })
};

module.exports = { MongoTestCon }
module.exports = { MongoTestCon }

const { MongoClient } = require('mongodb');

var dbs = MongoTestCon();
// console.log(dbs);

async function MongoTestCon() {

    const uri = "mongodb://mongoadmin:secret@127.0.0.1/?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        var dbList = await listDatabases(client);
        var dbArray = [];
        // console.log(dbList);
        dbList.databasesList.databases.forEach(db => {
            dbArray.push(db.name);
        });
        var list = dbList.databasesList.databases
        // console.log(JSON.stringify(dbArray));

        return new Promise(resolve => {
            setTimeout(() => resolve(JSON.stringify(dbArray)), 3000)
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

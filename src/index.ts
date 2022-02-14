import {mongoose, mongooseConnection} from './configurations/db-configuration';
import createServer from './app';

// should adapt env depending for development / tests / production
// require('dotenv').config({ path: `./environment/.env.${process.env.NODE_ENV}` })
require('dotenv').config({path: `./environment/.env.development`})
require('./configurations/db-configuration')

mongooseConnection
    .then(() => {
        const app = createServer();
        app.listen(process.env.PORT,
            () => console.log(`Start server successfully on port ${process.env.PORT}`))
    })

process.on('SIGINT', async function () {
    console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
    await mongoose.disconnect();
    process.exit(0);
});

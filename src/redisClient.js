const redis = require ("redis");

// use bluebird promises to promisify everything 
const { promisifyAll } = require('bluebird');
promisifyAll(redis);


/**
 * 
 * @returns a connected  client, after promisfication
 */
let init = async ()=>{

    const client = redis.createClient();

    client.on('error', err => {
        console.log('Error in redis ' + err);
    });

    return client;
}

module.exports = init;

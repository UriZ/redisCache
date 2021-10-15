const redis = require ("redis");

// use bluebird promises to promisify everything 
const { promisifyAll } = require('bluebird');
promisifyAll(redis);


/**
 * 
 * @returns a connected  client, after promisfication
 */
let init = async (retry = 0)=>{

    // 'urirediscluster.jsn1zq.clustercfg.use1.cache.amazonaws.com:6379'
    // const client = redis.createClient('urirediscluster.jsn1zq.clustercfg.use1.cache.amazonaws.com:6379');

    

    const client = redis.createClient({
        host: 'redis-13765.c250.eu-central-1-1.ec2.cloud.redislabs.com',
        port: 13765
    });

    client.on('error', err => {
        console.log('Error in redis ' + err);
        if (retry == 0)
            return init(retry+1);
        else
            throw new Error("on error event called multiple times");
    });

    return client;
}

module.exports = {init};

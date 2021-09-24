const RedisCache = require ('./src/redisCache');
let redisCache = new RedisCache();


let f = async()=>{


    await redisCache.init();
    let client = redisCache.getClient();

        try {
            await client.auth('bgyRSOJIG1Xl865TsCr0zO4GvlU9MTxw');
            await client.setAsync('foo', 'bar');
        } catch (error) {
            console.log(error);
        }
       
        const fooValue = await client.getAsync('foo');
        console.log(fooValue);
}

f();
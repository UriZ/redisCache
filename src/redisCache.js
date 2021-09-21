const redis = require ('./redisClient');

class RedisCache {

    constructor(){
        this.mock = {"key1":"val1","key2":"val2"};

        this.client= null;
    }


    async init (){

        try {
            this.client =  await redis.init();
        } catch (error) {
            throw new Error("could not connect to client" + error);

        }
    }
   

    /**
     * get item from cache, or from db
     * @param {*} itemID 
     * @returns 
     */
    getItem(itemID){
        return this.mock[itemID];
    }
}

d = new RedisCache();
console.log(d.getItem("key1"));


module.exports = RedisCache; 
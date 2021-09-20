
class RedisDao {

    constructor(){
        this.mock = {"key1":"val1","key2":"val2"};

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

d = new RedisDao();
console.log(d.getItem("key1"));


module.exports = RedisDao; 
const DAO = require ('../src/redisCache');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect  = chai.expect;
chai.should();

const RedisCache = require ('../src/redisCache');
let redisCache = new RedisCache();

describe("test redis client ", function() {

     it("test connection", async ()=>{

    //     //let client = await cache.init();
    //     //client.should.be.an('obect)');
    await redisCache.init();
    // console.log(redisCache);
    redisCache.should.be.an('object');
    //redisCache.init().should.eventually.be.an('object');

     });

    it("test put",  async ()=>{

        await redisCache.init();
        let client = redisCache.getClient();
        await client.auth('bgyRSOJIG1Xl865TsCr0zO4GvlU9MTxw');
        await client.setAsync('foo', 'bar');
        const fooValue = await client.getAsync('foo');
        console.log(fooValue);
        fooValue.should.equal('bar');
    });


});


describe("first test", function() {

    it ("get item should be a function", ()=>{
        expect(new DAO().getItem).to.be.a('function');
    });

    it("val should be val1", function() {

        let val =new DAO().getItem("key1");
        expect(val).to.equal("val1");

    });
  });


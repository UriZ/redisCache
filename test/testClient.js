const DAO = require ('../redisDao');
const expect    = require("chai").expect;

describe("first test", function() {

    it ("get item should be a function", ()=>{
        expect(new DAO().getItem).to.be.a('function');
    });

    it("val should be val1", function() {

        let val =new DAO().getItem("key1");
        expect(val).to.equal("val1");

    });
  });


const mock = {"key1":"val1","key2":"val2"};

let get = (key)=>{
    return mock.key;
}

console.log("yes");
module.exports = {

    "get":get
};

const orm = require('./../config/orm.js');

const burger = {
	all: () => {
        
        return  new Promise((resolve) => {
            orm.selectAll("burgers")
            .then((x) => resolve(x)); 
        });            
    }, 

	create: (cols, burgerName) => {
		return  new Promise((resolve) => {
			orm.insertOne("burgers", cols, burgerName)
			.then((res) => resolve(res));
		});
	},

	update: (objColVals, condition) => {
		return  new Promise((resolve) => {
			orm.updateOne("burgers", objColVals, condition)
			.then((res) => resolve(res));
		});
	}
};

module.exports = burger;
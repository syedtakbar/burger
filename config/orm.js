
const connection = require("./connection.js");

const orm = {

    objtoSql: (ob) => {
        var arr = [];
        for(var key in ob){
            if(ob.hasOwnProperty(key)){
                arr.push(key + "=" + ob[key]);
            }
        }
        return arr.toString();
    },

	
	selectAll: (table) => {
           const prom =  new Promise((resolve, reject) => {
            
            var queryString = "SELECT * FROM " + table;
            connection.query(queryString, (err, result) => {     
				if (err) throw reject(err);                                      
                resolve(result);                
            });	
        });

        return prom;
    },
    

    insertOne: (table, cols, vals) => {
		const prom =  new Promise((resolve, reject) => {
			var queryString = "INSERT INTO " + table;
			queryString += " (" + cols.toString(" ") + ")";
			queryString += " VALUES (?, 0, NULL, CURRENT_TIMESTAMP)";
			connection.query(queryString, vals, function(err, result){
				if(err) reject(err);
				resolve(result);
			});
		});
		return prom;
	},

	
	updateOne: function(table, objColVals, condition) {
        
        const prom =  new Promise((resolve, reject) => { 
			var queryString = "UPDATE " + table;

			queryString += " SET ";
			queryString += orm.objtoSql(objColVals);
			queryString += ", devoured_date = CURRENT_TIMESTAMP";
			queryString += condition;
			
			connection.query(queryString, function(err, result){
				if(err) reject(err);
				resolve(result);
			});
		});

		return prom;
	}
};

module.exports = orm;


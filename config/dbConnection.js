// var mongo = require('mongodb')

// var connMongoDB = function(){
// 	var db = new mongo.Db('got', new mongo.Server('locahost', 27017, {}),{})

// 	return db
// }

if (!global.database){
	var connMongoDB = require('mongodb').MongoClient
	connMongoDB.connect("mongodb://localhost:27017", function(err, conn){
		console.log('Abriu a conexao')
		if (err){
			return console.log('Erro de conexão')
		}

		global.database = conn.db("got")
	})
}

// module.exports = function(){
// 	return connMongoDB
// }
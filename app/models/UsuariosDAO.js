function UsuariosDAO(connection){
	// this._connection = connection()
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
	global.database.collection('usuarios', function(err, collection){
		collection.insert(usuario)
	})
}

module.exports = function(){
	return UsuariosDAO
}
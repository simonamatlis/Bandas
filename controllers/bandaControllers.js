const info = require('../db/bandas');

const bandaController ={
    listadoBandas: function(req,res){
        return res.render ('bandas' ,{
            bandas: info.lista
});
},


//Ruta que reciba un id y muestre la banda que tenga ese id como valor.
detalleBanda: function(req, res){
    let idBanda = req.params.id
    let resultadoBanda = [];
    for (let i=0 ; i < info.lista.length; i++){
        if(idBanda == info.lista[i].bandas){
            resultadoBanda.push(info.lista[i])
}
}

if (resultado.length == 0) {
    return res.send ('no tenemos la banda' + idBanda)
}else{
    return res.send('Banda:' + resultadoBanda )
}
},


//reciba un género y muestre las bandas que pertenecen a ese género.
porGenero: function(req, res){
    let idGenero = req.params.id
    let resultadoGenero= [];
    for (let i=0 ; i < info.lista.length; i++){
        if(idGenero == info.lista[i].genero){
            resultadoGenero.push(info.lista[i])
}
}
if (resultado.length == 0) {
    return res.send ('no tenemos el género ' + idGenero)
}else{
    return res.send('estas son las bandas que pertenecen al género:' + resultadoGenero )
}
},
}
module.exports = bandaController


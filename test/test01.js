function clasificaElementos(index) {
    let nPositivo = [];
    let nNegativo = [];
    let nCero = []
    for(let i = 0; i < index.length; i++){
        if(index[i] > 0){
            nPositivo.push(index[i])
        }else if(index[i] === 0){
            nCero.push(index[i])
        }else{
            nNegativo.push(index[i])
        }
    }
  let result = [(nPositivo.length/index.length).toFixed(4), (nNegativo.length/index.length).toFixed(4), (nCero.length/index.length).toFixed(4)]
  return result
}
module.exports = clasificaElementos;

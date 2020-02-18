const http= require('http');
const url = require('url');
const server = http.createServer((req,res)=>{
const petshop= require("./petshop")


//console.log('Rodou!!!!');
res.writeHead(200,{"Content-Type":"text/plain; charset=UTF-8"});
let urlCompleta = url.parse(req.url,true);
let queryString = urlCompleta.query;
let rota  = urlCompleta.pathname;

console.log(urlCompleta);

res.write("Bem Vindo ao Pet Shop \n")

switch(rota){
case "/pets":
res.write("Listando os pets");

const pets = petshop.listarPets();

if(pets.length>0){
res.write(pets);
}else{
    res.write("Nenhum pet cadastrado")
}

break;

case "/pets/add":
let novoPet = queryString;
if(petshop.adicionarPet(novoPet)){
    res.write(`${novoPet.nome} foi cadastrado com sucesso!`);
}else{
res.write("opps, cadastro deu errado")
}
res.write("Adicionar Pets");
break;
case "/pets/buscar":
let petBuscado = queryString.nome;

res.write("Buscar Pets");
if(petshop.buscarPet(petBuscado).length>0){
res.write("Pet encontrado com sucesso")
}else{
    res.write("pet nao encontrado")
}



break;
}

res.end();

}).listen(3000,"localhost",()=>{
    
    console.log("servidor ta ouvindo na porta 3000!")
})
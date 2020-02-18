let pets = [{
nome:"dog"
},
{
    nome:"cat"
}];

const listarPets = () =>{
let conteudo = "";

for(let pet of pets){
conteudo +=
`*********
${pet.nome}
**********`
}

return conteudo;
}

const adicionarPet= novoPet =>{
return pets.push(novoPet)
}

const buscarPet = nomePet=>{
console.log(nomePet);
let petsencontrados = pets.filter((pet)=>{
return pet.nome == nomePet
})   
return petsencontrados; 
}

module.exports = {listarPets,adicionarPet,buscarPet};

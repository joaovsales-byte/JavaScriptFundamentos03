const aluno = '{"nome": "João", "nota": 8}';

const json = JSON.parse(aluno);
console.log(json); // {nome: "João", nota: 8}
console.log(json.nome);
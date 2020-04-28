console.groupCollapsed("Nossas mensagens");

console.log("Console logando mensagem");
console.error("Eu sou um errro");
console.warn("Sou um aviso");
var num = 12;
if(num>10) {
    console.error("Número deve ser menor que 10");
}

console.assert(num <= 10, "Número nao pode ser maior que 10");

console.groupEnd();

console.table([
    [1,2,3],
    [2,4,6]
]);

console.table([
    {nome: "Alura", número: 2},
    {nome: "Jorge", número: 4}
])
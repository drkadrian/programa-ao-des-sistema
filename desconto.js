 let prompt = require("prompt-sync")();
   
 let preco = Number(prompt("Digite o preço do produto:"));
 let desconto = Number(prompt("Digite o percentual de desconto:"));

 let precoFinal = preco - (preço * (desconto/ 100));

 console.log("preço final com deconto:", precofinal);

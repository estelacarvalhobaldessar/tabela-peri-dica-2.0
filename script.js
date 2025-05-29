let tabela = '<table>';
// criar as linhas dinamicamente
for (let linha = 1; linha <= 10; linha++) {
    
    tabela += '<tr>';
    
    for (let coluna = 1; coluna <=18; coluna++) {

        // procurar no array pela linha e coluna e captura os dados do no do elemento
        let dado = colecaoElementos.find(elemento => elemento.linha === linha && elemento.coluna === coluna);
        
        if( typeof dado === "undefined" ){
            tabela += `<td class="semelemento"></td>`;        
        }else{
            tabela += `<td onclick="MostraDados(${dado.numeroAtomico});" class="elemento" id="" style="background-color:${dado.corGrupo}">
                        <span class="NA">${dado.numeroAtomico}</span>
                        <span class="S">${dado.simbolo}</span> 
                        <span class="NOME">${dado.nome}</span> 
                        <span class="MA">${dado.massaAtomica}</span>
                    </td>`;            
        }

       
    }
    tabela += '</tr>';
}
tabela += '</table>';
document.getElementById('tabelaPeriodica').innerHTML = tabela;  

function MostraDados(numeroAtomico){

    let caixona = document.getElementById('caixona');
    
    
    let dado = colecaoElementos.find(elemento => elemento.numeroAtomico == numeroAtomico);
    let informacoes = '';

    informacoes = `<div class="elementinho">
                        <h1 class="simbolo">${dado.simbolo}</h1>
                    </div>
                    <div class="dados">
                        <ul>
                            <li><strong>Nome:</strong>${dado.nome}</li>
                            <li><strong>Número Atomico:</strong>${dado.numeroAtomico}</li>
                            <li><strong>Raio Atômico:</strong>${dado.raioAtomico}</li>
                            <li><strong>Ponto De Ebulicao:</strong>${dado.pontoDeEbulicao}</li>
                            <li><strong>Massa Atomica:</strong>${dado.massaAtomica}</li>
                            <li><strong>Densidade:</strong>${dado.densidade}</li>
                            <li><strong>Eletronegatividade:</strong>${dado.eletronegatividade}</li>
                            <li><strong>Grupo:</strong>${dado.grupo}</li>
                            <li><strong>Ponto De Fusao:</strong>${dado.pontoDeFusao}</li>
                            <li><strong>Estado Padrao:</strong>${dado.estadoPadrao}</li>
                            <li><strong>Ano De Descoberta:</strong>${dado.anoDeDescoberta}</li>
                            <li><strong>Raio De VanDerWaals:</strong>${dado.raioDeVanDerWaals}</li>
                        </ul>
                    </div>`;
    caixona.innerHTML = informacoes;

}
/*
for ( linha = 1; linha <= 7;) {
    const tr = document.createElement('tr');
    for (lnha = 1; linha <= 18;){
    const td = document.createElement('td');
    }
}
*/
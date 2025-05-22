let tabela = '<table>';

// criar as linhas dinamicamente
for (let linha = 1; linha <= 7; linha++) {
    
    tabela += '<tr>';
    
    for (let coluna = 1; coluna <=18; coluna++) {

        // procurar no array pela linha e coluna e captura os dados do no do elemento
        let dado = colecaoElementos.find(elemento => elemento.linha === linha && elemento.coluna === coluna);
        
        if( typeof dado === "undefined" ){
            tabela += `<td class="semelemento"></td>`;        
        }else{
            tabela += `<td class="elemento" id="" style="background-color:${dado.corGrupo}">
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




/*
for ( linha = 1; linha <= 7;) {
    const tr = document.createElement('tr');
    for (lnha = 1; linha <= 18;){
    const td = document.createElement('td');
    }
}
*/


let tabela = '<table>';

// criar as linhas dinamicamente
for (let linha = 1; linha <= 7; linha++) {
    
    tabela += '<tr>';
    
    for (let coluna = 1; coluna <=18; coluna++) {

        // procurar no array pela linha e coluna e captura os dados do no do elemento

        //
        tabela += `<td class="elemento">
                        <span class="NA">1</span>
                        <span class="S">H</span> 
                        <span class="NOME">Hidrogênio</span> 
                        <span class="MA">1,008</span>
                    </td>`;        
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


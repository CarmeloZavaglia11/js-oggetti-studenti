$(document).ready(function(){

    // PARTE 1 

    var studente = {
        'Nome': 'Francesco',
        'Cognome': 'Iesoli',
        'Eta': 16
    }    

    for (var k in studente) {
        $('.info-stud').append(k + ':' + studente[k] + ' ');
    } 

    // PARTE 2 

    var studenti = [
        {
            'Nome': 'Pino',
            'Cognome': 'Nore',
            'Eta': 17
        },    
        {
            'Nome': 'Gabriele',
            'Cognome': 'Teso',
            'Eta': 20
        },   
        {
            'Nome': 'Francesco',
            'Cognome': 'Iesoli',
            'Eta': 16
        }    
    ];

    for (var i = 0; i < studenti.length; i++) {
        var nome = studenti[i].Nome;
        var cognome = studenti[i].Cognome;
        $('.nomecogn').append('Nome: ' + nome + ' ' +  'Cognome: ' + cognome + ' ||');
    }

    // PARTE 3
    
    var nomeUtente = prompt('inserisci il nome dello studente');
    var cognomeUtente = prompt('inserisci il cognome dello studente')
    var etaUtente =  parseInt(prompt("inserisci l'età dello studente"));

    var studenteUtente = {
        'Nome': nomeUtente,
        'Cognome': cognomeUtente,
        'Eta': etaUtente
    }

    studenti.push(studenteUtente);

    for (var i = 0; i < studenti.length; i++){
        for (var k in studenti[i]){
            $('.studenti').append('<li>' + k + ': ' + studenti[i][k] + '</li>');
        }
    }

});

console.log('it works');

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// seleziono l'elemento dalla DOM
let rowElement=document.querySelector('.row')

//1. stampare su console le informazioni di nome, ruolo e la stringa della foto
// ciclo dentro l'array 'team' per selezionare il singolo lavoratore
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member);

    // ciclo dentro l'oggetto per selezionare i valori
    for (let key in member) {

        // salvo in una variabile i valori
        let memberValue = member[key]
        
        // li loggo in console
        console.log(memberValue);
        
        //creo una const dove salvo il markup con i valori
        const markup= `<p>${memberValue}</p>`

        // stampo all'interno la const contenente il markup con innerHTML
        rowElement.innerHTML+= markup
    }


}

//2. stampare le stesse informazioni su DOM sottoforma di stringhe

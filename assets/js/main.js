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
let rowElement = document.querySelector('.row')

//1. stampare su console le informazioni di nome, ruolo e la stringa della foto
// ciclo dentro l'array 'team' per selezionare il singolo lavoratore
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member);

    // ciclo dentro l'oggetto per selezionare i valori


    // salvo in una variabile i valori


    let memberNome = member.name
    let memberRole = member.role
    let memberImg = member.image





    // li loggo in console
    console.log(memberNome);



    //creo una const dove salvo il markup con i valori
    const markup= ` <div class="col-4 g-5"><div class="card p-4"><h3>${memberNome}</h3> <p>${memberRole}</p> <img src="../assets/img/${memberImg}" alt=""></div></div>`

    // stampo all'interno la const contenente il markup con innerHTML
    rowElement.innerHTML+= markup



}


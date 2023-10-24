// lista de usuarios
const usuarios = [
  { name: 'User A', photo: 'https://picsum.photos/id/3/200' },
  { name: 'User B', photo: 'https://picsum.photos/id/6/200' },
  { name: 'User C', photo: 'https://picsum.photos/id/9/200' },
  { name: 'User D', photo: 'https://picsum.photos/id/12/200' },
  { name: 'User E', photo: 'https://picsum.photos/id/15/200' },
  { name: 'User F', photo: 'https://picsum.photos/id/18/200' },
];

const dataUsers = [
  {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  },
  {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
    }
];

const URL = 'https://reqres.in/api/users?page=1'



// creando las tarjetas del usuario
const newCard = (usuario) => {

  const name = usuario.first_name + " " + usuario.last_name

  // <div class='card'></div>
  const divCard = document.createElement('div')
  divCard.classList.add('card')

  // <img src="${usuario.photo}" alt="Foto de perfil del usuario">
  const imgCard = document.createElement('img')
  imgCard.setAttribute('src', usuario.avatar)
  imgCard.setAttribute('alt', name)
  divCard.append(imgCard)


  const divUser = document.createElement('div')
  divUser.classList.add('info')

  const h2Card = document.createElement('h2')
  h2Card.textContent = name
  divUser.append(h2Card)

  const pCard = document.createElement('p')
  pCard.textContent = usuario.email
  divUser.append(pCard)

  divCard.append(divUser)

  return divCard
}
//

const listCards = (container) => {
    // creando la lista de usuarios
    dataUsers.forEach( usuario => {
    container.append( newCard(usuario) )
  })
  }


const title = ( text ) => {
    const title = document.createElement('h1')
    title.textContent = text
  
    return title
  }

const container = document.getElementById('root');

const containerUsers = document.createElement('div')
containerUsers.setAttribute("id", "containerUsers");

container.append(title('Lista de Usuarios'))
container.append(containerUsers)

listCards( containerUsers )





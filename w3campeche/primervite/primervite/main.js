import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from './src/components/Card'
const app=document.querySelector('#app')

app.innerHTML+=`<h1 class="bg-dark text-light">Hello world</h1>`
app.innerHTML+=`<div class='grid'>
${Card()}
${Card()}
${Card()}

</div>
`


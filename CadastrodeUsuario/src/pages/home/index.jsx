import { useState } from 'react'
import viteLogo from '/vite.svg'
import './style.css'
import Trash from '../../assets/trash.svg';

function Home() {
  const [count, setCount] = useState(0)
  const users = [
    {
      id: 1,
      name: "Rafael",
      age: 33,
      email: "rafaelccanuto@gmail.com"
    },
    {
      id: 2,
      name: "Leandro",
      age: 33,
      email: "leandro.silva@gmail.com"
    }
  ]
  return (
    <div className='container'>
      <form action="">
        <h1>Cadastro de usuários</h1>
        <input type="text" name='nome' placeholder='Nome' />
        <input type="number" name='idade' placeholder='Idade' />
        <input type="email" name='email' placeholder='E-mail' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age} </p>
            <p>E-mail: {user.email} </p>
          </div>
          <button>
            <img src={Trash} className='trash' alt="" />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home

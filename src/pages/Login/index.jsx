import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  return (
    <Container>
      <form className="bg-white shadow rounded px-8 pt-6 pb-8 mb-4 w-80" onSubmit={() => signIn(email, password)}>
        <h3 className="border-b py-4 font-bold text-indigo-500 text-center text-xl tracking-widest uppercase">Entrar</h3>

        <input
          type="email"
          placeholder="E-mail"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block"
        >
          Acessar
        </button>
      </form>
    </Container>
  );
}

export default Login;
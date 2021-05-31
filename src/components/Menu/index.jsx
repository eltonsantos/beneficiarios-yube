import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

const Menu = () => {

  const { logged, signOut } = useAuth();

  return (
    <nav className="relative bg-indigo-500 border-b-2 border-indigo-500 text-gray-900">
      <div className="container flex justify-between">
        <div className="relative block p-4 lg:p-6 text-xl mr-6 text-white font-bold">
          {
            logged ?
            (
              <Link to="/admin" className="hover:text-indigo-900">Beneficiários | Yube</Link>
            )
            :
            (
              <Link to="/" className="hover:text-indigo-900">Beneficiários | Yube</Link>
            )
          }
          
        </div>
        <ul className="flex">
          {

            logged ?
              (
                <>
                  <li className="hover:bg-indigo-700 text-white hover:text-white">
                    <Link to="/admin" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Admin</Link>
                  </li>
                  <li className="hover:bg-indigo-700 text-white hover:text-white">
                    <Link to="/login" onClick={signOut} className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Sair</Link>
                  </li>
                </>
              )
              :
              (
                <>
                  <li className="hover:bg-indigo-700 text-white hover:text-white">
                    <Link to="/" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Cadastro</Link>
                  </li>
                  <li className="hover:bg-indigo-700 text-white hover:text-white">
                    <Link to="/login" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Login</Link>
                  </li>
                </>
              )

          }

        </ul>
      </div>
    </nav>
  )
}

export default Menu;
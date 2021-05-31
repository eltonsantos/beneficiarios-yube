import { Link } from 'react-router-dom';

const Admin = () => {

  function remove() {
    alert('Removing');
  }

  return (
    <>
      <h3 className="px-5 py-5 space-y-6 sm:p-6 text-indigo-500 font-bold text-2xl">Colaboradores</h3>

      <div className="grid grid-flow-col grid-rows-1 sm:grid-rows-1 sm:grid-cols-1 gap-2">
        <div className="">
          <div className="px-4 sm:px-6 py-4">
            <div className="inline-block min-w-full shadow-md">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Avatar / Nome Completo
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      CPF
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Benefício
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Possui dependentes?
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Aprovado?</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap leading-10">Tamires Dias</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">123.456.789-00</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">Seguro desemprego</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                      >
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Sim</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                      >
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Sim</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                      <Link to="/details" className="inline-block text-gray-500 hover:text-indigo-700 mr-5 font-bold">
                        Ver Detalhes
                      </Link>

                      <Link to="" className="inline-block text-gray-500 hover:text-indigo-700 mr-5 font-bold">
                        Editar
                      </Link>

                      <button type="button" onClick={() => remove()} className="inline-block text-gray-500 hover:text-red-700 font-bold focus:outline-none">
                        Remover
                      </button>
                    </td>
                  </tr>
                  <tr className="">
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">2</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap  leading-10">Elton Santos</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">987.654.321-99</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">Bolsa família</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                      >
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-yellow-500 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Não</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                      >
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-yellow-500 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Não</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <Link
                        to="/details"
                        className="inline-block text-gray-500 hover:text-indigo-700 mr-5 font-bold"
                      >
                        Ver Detalhes
                      </Link>
                      <Link
                        to="/details"
                        className="inline-block text-gray-500 hover:text-indigo-700 mr-5 font-bold"
                      >
                        Editar
                      </Link>
                      <button
                        type="button"
                        onClick={() => remove()}
                        className="inline-block text-gray-500 hover:text-red-700 font-bold focus:outline-none"
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin;
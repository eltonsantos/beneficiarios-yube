import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import { store } from '../../services/firebaseconfig';

import { useHistory } from 'react-router-dom';

const Admin = () => {

  const [list, setList] = useState([]);
  const notify = () => toast.success("Colaborador removido com sucesso");

  let history = useHistory();

  useEffect(() => {
    const getCollaborators = async () => {
      const { docs } = await store.collection('collaborators').get() || [];
      const listing = docs.map(collaborator => ({ id: collaborator.id, ...collaborator.data() }));
      setList(listing);
    }
    getCollaborators();
  }, []);

  const remove = async (id) => {
    try {
      await store.collection('collaborators').doc(id).delete();
      const { docs } = await store.collection('collaborators').get();
      const listing = docs.map(collaborator => ({ id: collaborator.id, ...collaborator.data() }));
      setList(listing);
      console.log("Membro deletado!")
      notify();
    } catch (e) {
      console.log(e);
    }
  }

  function details(col){
    history.push('/details', col)
  }

  return (
    <>
      <ToastContainer />
      <h3 className="px-5 py-5 space-y-6 sm:p-6 text-indigo-500 font-bold text-2xl">Colaboradores</h3>

      <div className="grid grid-flow-col grid-rows-1 sm:grid-rows-1 sm:grid-cols-1 gap-2">
        <div className="">
          <div className="px-4 sm:px-6 py-4">
            <div className="inline-block min-w-full shadow-md">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
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
                  {
                    list.length !== 0 ?
                      (
                        list.map(col => (
                          <tr key={col.id} className="">
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img
                                    className="w-full h-full rounded-full"
                                    src={col.avatar}
                                    alt={col.name}
                                  />
                                </div>
                                <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap leading-10">{col.name} {col.surname}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {col.cpf}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">{col.benefitSelected}</p>
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

                              <button onClick={() => { details(col) }} className="inline-block text-gray-500 hover:text-indigo-700 mr-5 font-bold">
                                Ver Detalhes
                            </button>

                              <button onClick={(id) => { remove(col.id) }} className="inline-block text-gray-500 hover:text-red-700 font-bold focus:outline-none">
                                Remover
                      </button>
                            </td>
                          </tr>
                        ))
                      )
                      :
                      (
                        <tr><td>Não ha colaborador cadastrado</td></tr>
                      )
                  }


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
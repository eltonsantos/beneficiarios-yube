const Details = () => {
  return (
    <>
      <h3 className="px-5 py-5 space-y-6 sm:p-6 text-indigo-500 font-bold text-2xl">Colaborador</h3>

      <div className="grid sm:grid-flow-col grid-rows-1 sm:grid-rows-1 sm:grid-cols-2 gap-2 p-2">

        <div className="">

          <header className="flex flex-wrap items-center p-4 md:py-8">
            <div className="md:w-3/12 md:ml-1">
              <img className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 border-indigo-600 p-1" src="https://avatars.githubusercontent.com/u/1292594?v=4" alt="profile" />
            </div>

            <div className="w-8/12 md:w-7/12 ml-9">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-lg inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  <div><b>Nome Completo:</b></div>
                  Elton Santos
                </h2>
              </div>

              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-lg inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  <div><b>CPF:</b></div>
                  123.456.789-00
                </h2>
              </div>

              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-lg inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  <div><b>Benefício Solicitado:</b></div>
                    Seguro desemprego
                  </h2>
              </div>

            </div>

          </header>

          <div className="p-4 md:py-8 border-t">
            <h2 className="font-bold pb-2">Dependentes para inclusão</h2>

            <table className="min-w-full border leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Nome Completo
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    CPF
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Esther Santos</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">333.333.333-00</p>
                  </td>
                </tr>
                <tr className="">
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Eduardo Santos</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">444.444.444-00</p>
                  </td>
                </tr>


              </tbody>
            </table>

          </div>



        </div>

        <div className=" p-3">
          <h2 className="font-bold pb-2 text-lg text-indigo-500">Avaliação</h2>

          <label className="inline-flex items-center mt-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
            <span className="ml-2 text-gray-700">Aprovar pedido?</span>
          </label>

          <div className="mt-4">
            <textarea rows="12" className="block w-full border p-3 bg-gray-200 focus:bg-white focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-2" placeholder="Parecer..."></textarea>
          </div>

          <div className="text-right sm:px-0 pt-2">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Enviar
              </button>
          </div>
        </div>

      </div>

    </>
  )
}

export default Details;
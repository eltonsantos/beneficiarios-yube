const Dependents = () => {
  return (
    <>
      <div className="mt-1 col-span-6 sm:col-span-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          type="text"
          name="name_dependente"
          id="name_dependente"
          className="mt-1 py-2 px-4 bg-gray-200 focus:bg-white focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        />
      </div>

      <div className="mt-1 col-span-6 sm:col-span-3">
        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
          Sobrenome
        </label>
        <input
          type="text"
          name="surname_dependente"
          id="surname_dependente"
          className="mt-1 py-2 px-4 bg-gray-200 focus:bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        />
      </div>

      <div className="mt-1 col-span-6 sm:col-span-4">
        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
          CPF
        </label>
        <input
          type="text"
          name="cpf_dependente"
          id="cpf_dependente"
          className="mt-1 py-2 px-4 bg-gray-200 focus:bg-white  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        />
      </div>

      <div className="mt-1 col-span-6 sm:col-span-4">
        <button
          type="submit"
          className="inline-flex justify-center mt-3 py-2 px-4 border block w-full py-3 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Incluir dependente
        </button>
      </div>
    </>

  )
}

export default Dependents;
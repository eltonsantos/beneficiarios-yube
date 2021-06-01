import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from '../../services/firebaseconfig';

import Dependents from '../Dependents';

const Collaborators = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const options = ['Auxílio Doença', 'Seguro Desemprego', 'Bolsa Família'];
  const [benefitSelected, setBenefitSelected] = useState('99');
  const [avatar, setAvatar] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
  const [, setList] = useState([]);

  const notify = () => toast.success("Colaborador cadastrado com sucesso");

  const addCollaborator = async (e) => {
    e.preventDefault();

    const collaborator = {
      name,
      surname,
      cpf,
      benefitSelected,
      avatar
    }

    try {
      await store.collection('collaborators').add(collaborator);
      const { docs } = await store.collection('collaborators').get() || [];
      const listing = docs.map(collaborator => ({ id: collaborator.id, ...collaborator.data() }));
      setList(listing);
      notify();
    }  catch (e) {
      console.log(e);
    }

    setName('');
    setSurname('');
    setCpf('');
    setBenefitSelected('99');
    setAvatar('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');

  }

  // MODAL FOR INCLUDE DEPENDENTS
  function openModal() {
    const buttonOpenModal = document.getElementById('openModal');

    const modalWrapper = document.querySelector('.modal-wrapper');

    const span = document.getElementById('close');

    buttonOpenModal.onclick = function () {
      modalWrapper.classList.remove('invisible');
    }

    span.onclick = function () {
      modalWrapper.classList.add('invisible');
    }

    window.onclick = function (event) {
      if (event.target === modalWrapper) {
        modalWrapper.classList.add('invisible');
      }
    }

    document.addEventListener('keydown', function (event) {
      const isEscKey = event.key === 'Escape';
      if (isEscKey) {
        modalWrapper.classList.add('invisible');
      }
    });
  }

  // UPLOAD AVATAR
  const avatarHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  return (
    <>
      <ToastContainer />
      <div className="grid grid-flow-col grid-rows-1 sm:grid-rows-1 sm:grid-cols-2 gap-2">

        <form onSubmit={addCollaborator}>

          <div className="modal-wrapper invisible fixed bg-gray-700 bg-opacity-30 w-screen h-screen flex items-center justify-center">
            <div className="pt-4 pb-7 pr-10 pl-10 bg-white border-2 border-indigo-300 rounded ">
              <span id="close" className="close text-3xl text-indigo-500 font-bold cursor-pointer block text-right">&times;</span>
              <Dependents />
            </div>
          </div>

          <div className="px-4 py-5 space-y-6 sm:pb-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome
                </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 py-3 px-4 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                Sobrenome
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                className="mt-1 py-3 px-4 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                value={surname}
                onChange={(e) => { setSurname(e.target.value) }}
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                CPF
              </label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                className="mt-1 py-3 px-4 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                value={cpf}
                onChange={(e) => { setCpf(e.target.value) }}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Escolha um benefício
                    </label>
              <select
                className="mt-1 block w-full py-3 px-4 border-gray-300 bg-gray-200 rounded-md shadow-sm focus:bg-white   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:ring-2 focus:ring-offset-2"
                value={benefitSelected}
                onChange={(e) => { setBenefitSelected([e.target.value]) }}
              >
                <option value='99'>Selecione um benefício</option>
                {
                  options.map((b, key) => <option key={key} value={b}> {b} </option>)
                }
              </select>
            </div>

            {/* { benefitSelected } */}

            <button type="button" onClick={() => openModal()} id="openModal" className="block w-full justify-center border shadow-sm mt-3 p-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-offset-2">Incluir dependente</button>

            <div>
              <label className="block text-sm font-medium text-gray-700">Escolha uma foto</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <img src={avatar} alt="Avatar" className="inline-block h-32 w-32 mr-10 rounded-full overflow-hidden bg-gray-100" />
                <div className="space-y-1 text-center">
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="mt-10 relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="text-center items-center">Envie um arquivo</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={avatarHandler} />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
                </div>
              </div>
            </div>

            <div className="text-right sm:px-0">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar dados
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Collaborators;
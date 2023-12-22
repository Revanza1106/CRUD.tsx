import './index.css'
import { useEffect, useReducer,useState } from 'react'
import ContactForm from './components/ContactForm'
import Header from './components/Header'
import { contactsReducer,State,Contact } from './reducer/contactsReducer'
import ContactList from './components/ContactList'
import EditModel from './components/EditModel'

const initialState: State = {
  contacts: []
};

function App() {
const [state,dispatch] = useReducer(contactsReducer,initialState);
const [showModal,setShowModal] = useState(false);
const [dataToEdit,setDataToEdit] = useState<Contact | undefined>
(undefined);

useEffect (() => {
  if (!showModal) {
    setDataToEdit(undefined);
  }
}, [showModal]);

const toggleModal = () => {
  setShowModal((show) => !show);
};

const handleEdit = (id: number) => {
  setDataToEdit(state.contacts.find((contact) => contact.id === id));
  toggleModal();
};


console.log('state',state)  
  return (

     <div>
      <Header />
      <div className='main-container'>
      <ContactForm
          dispatch={dispatch}
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}
        />
       <hr />
      </div>
      <div className='list-contact'>
      {state.contacts.length > 0 && (
          <ContactList
            contacts={state.contacts}
            handleEdit={handleEdit}
            dispatch={dispatch}
          />
        )}
      </div>
      <EditModel 
      showModal={showModal}
      dataToEdit={dataToEdit}
      toggleModal={toggleModal}
      dispatch={dispatch}
      />
     </div>

  )
}

export default App

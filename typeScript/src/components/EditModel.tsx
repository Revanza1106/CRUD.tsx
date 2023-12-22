import { FC } from "react"
import { Modal, ModalBody, ModalHeader } from "react-bootstrap"
import { Action, Contact } from "../reducer/contactsReducer"
import ContactForm from "./ContactForm"

interface EditModalProps{
    showModal: boolean;
    dataToEdit: Contact | undefined;
    toggleModal: () => void;
    dispatch: React.Dispatch<Action>;
}

const EditModel: FC<EditModalProps> = ({showModal,dataToEdit,toggleModal,dispatch}) => {
  return (
    <Modal show={showModal} onHide={toggleModal}>
    <Modal.Header closeButton>
      <Modal.Title>Update Contact</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ContactForm
        dispatch={dispatch}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
      />
    </Modal.Body>
  </Modal>
  )
}

export default EditModel
import { FC } from "react";
import { Action, Contact } from "../reducer/contactsReducer";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";


interface ExtraProps {
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}

const ContactItem: FC<Contact & ExtraProps> = ({
  id,
  firstName,
  lastName,
  phone,
  handleEdit,
  dispatch,
}) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <AiFillEdit size={20} onClick={() => handleEdit(id)}   className='icon'/>
      </td>
      <td>
      <AiFillDelete 
      size={20}
      onClick={() => {
        const confirmDelete = window.confirm(
          `are you sure want to delete for contact ${firstName} ${lastName}`
        )
        if(confirmDelete){
          dispatch({
            type: 'DELETE_CONTACT',
            payload:{id}
          })
        }
        
      }}
      />
      </td>
    </tr>
  );
};

export default ContactItem;

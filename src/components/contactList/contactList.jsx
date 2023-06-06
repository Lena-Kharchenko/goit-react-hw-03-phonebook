import PropTypes from 'prop-types';
import css from './contactList.module.css';

const ContactList = ({ contactList, onChange }) => {
  return (
    <>
      {contactList.length === 0 ? (
        <div>Empty</div>
      ) : (
        <ul>
          {contactList.map(({ name, id, number }) => (
            <li key={id}>
              <span className={css.name}> {name}:</span>
              <span className={css.number}>{number}</span>
              <button type="button" id={id} onClick={onChange}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  onChange: PropTypes.func.isRequired,
};

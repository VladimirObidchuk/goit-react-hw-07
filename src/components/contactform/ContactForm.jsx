import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.elements.text.value === "" || form.elements.tel.value === "") {
      return alert("Please. Enter name and phone");
    }
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: form.elements.text.value,
        tel: form.elements.tel.value,
      })
    );
    console.log(" form", form.elements.text.value);
    form.reset();
  };
  return (
    <form className={css.search} onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Enter contact name...."
        className={css.field}
      />
      <input
        type="tel"
        name="tel"
        placeholder="Enter contact phone...."
        className={css.field}
      />
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

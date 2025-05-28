import "modern-normalize";
import "./App.css";
import ContactForm from "./contactform/ContactForm";
import ContactList from "./contactlist/ContactList";
import SearchBox from "./searchbox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectLoading } from "../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="main">
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <strong>Loading contacts? please wait...</strong>}
      <ContactList />
    </div>
  );
}

import "modern-normalize";
import "./App.css";
import ContactForm from "./contactform/ContactForm";
import ContactList from "./contactlist/ContactList";
import SearchBox from "./searchbox/SearchBox";
import { useSelector } from "react-redux";

// import SearchBar from "./searchbar/SearchBar";
// import TaskList from "./tasklist/TaskList";

export default function App() {
  const isLoading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);
  return (
    <div className="main">
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <strong>Loading contacts? please wait...</strong>}
      <ContactList />
    </div>
  );
}

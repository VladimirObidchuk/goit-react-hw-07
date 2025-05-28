import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { useDebouncedCallback } from "use-debounce";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterContakts = useSelector(selectNameFilter);
  const debounced = useDebouncedCallback(
    (value) => dispatch(changeFilter(value.trim())),
    400
  );

  return (
    <div className={css.seachContact}>
      <label htmlFor="search" className={css.label}>
        Search
      </label>
      <input
        id="search"
        type="text"
        name="search"
        defaultValue={filterContakts}
        onChange={(e) => debounced(e.target.value)}
        className={css.input}
        placeholder="Enter contact...."
      />
    </div>
  );
};
export default SearchBox;

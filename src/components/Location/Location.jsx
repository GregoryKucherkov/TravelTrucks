import { useDispatch, useSelector } from "react-redux";

import css from "./Location.module.css";
import { filtLocation } from "../../redux/filters/reduxFilters";
import sprite from "../../assets/sprite.svg";
import { selectLocation } from "../../redux/filters/filterSelectors";

const Location = () => {
  const dispatch = useDispatch();
  const locationHolder = useSelector(selectLocation);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.elements.location.value.trim();
    dispatch(filtLocation(location));

    form.reset();
  };

  return (
    <div>
      <div className={css.location}>Location</div>
      <form onSubmit={handleSearch} className={css.form}>
        <svg
          className={css.svg}
          style={{ width: "20", height: "20", fill: "black" }}
        >
          <use href={`${sprite}#map`} />
        </svg>
        <input
          className={css.input}
          placeholder={locationHolder ? locationHolder : "Kyiv, Ukraine"}
          name="location"
        />

        <button type="submit" className={css.btn} />
      </form>
    </div>
  );
};

export default Location;

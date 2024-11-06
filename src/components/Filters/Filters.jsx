import css from "./Filters.module.css";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter, toggleForm } from "../../redux/filters/reduxFilters";
import {
  selectEquipment,
  selectType,
} from "../../redux/filters/filterSelectors";

const Filters_1 = () => {
  const dispatch = useDispatch();
  const equipment = useSelector(selectEquipment);
  const selType = useSelector(selectType);

  const handleFeatureChange = (e) => {
    const equip = e.target.value;
    dispatch(toggleFilter(equip));
  };

  const handleTypeChange = (e) => {
    const type = e.target.value;
    dispatch(toggleForm(type));
  };
  // const handleChange = (e) => {
  //   const type = e.target.type;
  //   if (type === "checkbox") {
  //     dispatch(toggleFilter(e.target.value));
  //   } else {
  //     dispatch(toggleForm(e.target.value));
  //   }
  // };

  // let lastSelected = null;
  const handleUnselect = (e) => {
    const radio = e.target;
    if (radio.type === "radio") {
      // Check if the clicked radio is the same as the last selected
      if (selType === radio.value) {
        dispatch(toggleForm(radio.value));
      }
    }
  };

  return (
    <>
      <div className={css.filters}>Filters</div>
      <form className={css.form}>
        <fieldset className={css.fieldset}>
          <hr />
          <legend className={css.filterTitle}>Vehicle equipment</legend>
          <input
            type="checkbox"
            id="ac"
            name="equipment"
            value="AC"
            checked={equipment.AC}
            onChange={handleFeatureChange}
          />
          <label htmlFor="ac" className={css.label}>
            <svg>
              <use href={`${sprite}#ac`} />
            </svg>
            <span>AC</span>
          </label>
          <input
            type="checkbox"
            id="bathroom"
            name="equipment"
            value="bathroom"
            checked={equipment.bathroom}
            onChange={handleFeatureChange}
          />
          <label htmlFor="bathroom" className={css.label}>
            <svg>
              <use href={`${sprite}#bathroom`} />
            </svg>
            <span>Bathroom</span>
          </label>
          <input
            type="checkbox"
            id="kitchen"
            name="equipment"
            value="kitchen"
            checked={equipment.kitchen}
            onChange={handleFeatureChange}
          />
          <label htmlFor="kitchen" className={css.label}>
            <svg>
              <use href={`${sprite}#kitchen`} />
            </svg>
            <span>Kitchen</span>
          </label>
          <input
            type="checkbox"
            id="tv"
            name="equipment"
            value="TV"
            checked={equipment.TV}
            onChange={handleFeatureChange}
          />
          <label htmlFor="tv" className={css.label}>
            <svg>
              <use href={`${sprite}#tv`} />
            </svg>
            <span>TV</span>
          </label>
          <input
            type="checkbox"
            id="radio"
            name="equipment"
            value="radio"
            checked={equipment.radio}
            onChange={handleFeatureChange}
          />
          <label htmlFor="radio" className={css.label}>
            <svg>
              <use href={`${sprite}#radio`} />
            </svg>
            <span>Radio</span>
          </label>
          <input
            type="checkbox"
            id="refrigerator"
            name="equipment"
            value="refrigerator"
            checked={equipment.refrigerator}
            onChange={handleFeatureChange}
          />
          <label htmlFor="refrigerator" className={css.label}>
            <svg>
              <use href={`${sprite}#refrigerator`} />
            </svg>
            <span>Refrigerator</span>
          </label>
          <input
            type="checkbox"
            id="microwave"
            name="equipment"
            value="microwave"
            checked={equipment.microwave}
            onChange={handleFeatureChange}
          />
          <label htmlFor="microwave" className={css.label}>
            <svg>
              <use href={`${sprite}#microwave`} />
            </svg>
            <span>Microwave</span>
          </label>
          <input
            type="checkbox"
            id="gas"
            name="equipment"
            value="gas"
            checked={equipment.gas}
            onChange={handleFeatureChange}
          />
          <label htmlFor="gas" className={css.label}>
            <svg>
              <use href={`${sprite}#gas`} />
            </svg>
            <span>Gas</span>
          </label>
          <input
            type="checkbox"
            id="water"
            name="equipment"
            value="water"
            checked={equipment.water}
            onChange={handleFeatureChange}
          />
          <label htmlFor="water" className={css.label}>
            <svg>
              <use href={`${sprite}#water`} />
            </svg>
            <span>Water</span>
          </label>
        </fieldset>
        <fieldset className={css.fieldset} onClick={handleUnselect}>
          <hr />
          <legend className={css.filterTitle}>Vehicle type</legend>
          <input
            type="radio"
            id="panelTruck"
            name="form"
            value="panelTruck"
            checked={selType === "panelTruck"}
            onChange={handleTypeChange}
          />
          <label htmlFor="panelTruck" className={css.label}>
            <svg>
              <use href={`${sprite}#van`} />
            </svg>
            <span>Van</span>
          </label>
          <input
            type="radio"
            id="alcove"
            name="form"
            value="alcove"
            checked={selType === "alcove"}
            onChange={handleTypeChange}
          />
          <label htmlFor="alcove" className={css.label}>
            <svg>
              <use href={`${sprite}#alcove`} />
            </svg>
            <span>Alcove</span>
          </label>
          <input
            type="radio"
            id="fullyIntegrated"
            name="form"
            value="fullyIntegrated"
            checked={selType === "fullyIntegrated"}
            onChange={handleTypeChange}
          />
          <label htmlFor="fullyIntegrated" className={css.label}>
            <svg>
              <use href={`${sprite}#fullyIntegrated`} />
            </svg>
            <span>Fully Integrated</span>
          </label>
        </fieldset>
      </form>
    </>
  );
};

export default Filters_1;

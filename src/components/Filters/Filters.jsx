import { useDispatch, useSelector } from "react-redux";
import css from "./Filters.module.css";
import { toggleFilter, toggleForm } from "../../redux/filters/reduxFilters";
import {
  selectEquipment,
  selectType,
} from "../../redux/filters/filterSelectors";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";

const Filters = () => {
  const dispatch = useDispatch();
  const equipment = useSelector(selectEquipment);
  const selType = useSelector(selectType);

  const toggle = (feature) => {
    dispatch(toggleFilter(feature));
  };

  const toggleType = (type) => {
    dispatch(toggleForm(type));
  };

  const isType = (type) => selType.includes(type);

  return (
    <>
      <div className={css.filters}>Filters</div> <br />
      <h3 className={css.filterTitle}>Vehicle equipment</h3>
      <hr />
      <div>
        <ul className={css.options}>
          <li className={css.item}>
            <button
              type="button"
              className={clsx(css.filterBtn, { [css.checked]: equipment.AC })}
              //   className={clsx(css.filterBtn, { [css.checked]: isSelected("ac") })}
              onClick={() => {
                toggle("AC");
              }}
            >
              <svg>
                <use href={`${sprite}#ac`} />
              </svg>
              AC
            </button>
          </li>

          <li>
            <button
              type="button"
              className={clsx(css.filterBtn, {
                [css.checked]: equipment.bathroom,
              })}
              onClick={() => {
                toggle("bathroom");
              }}
            >
              <svg>
                <use href={`${sprite}#bathroom`} />
              </svg>
              Bathroom
            </button>
          </li>

          <li>
            <button
              type="button"
              className={clsx(css.filterBtn, {
                [css.checked]: equipment.kitchen,
              })}
              onClick={() => {
                toggle("kitchen");
              }}
            >
              <svg>
                <use href={`${sprite}#kitchen`} />
              </svg>
              Kitchen
            </button>
          </li>

          <li>
            <button
              type="button"
              className={clsx(css.filterBtn, {
                [css.checked]: equipment.tv,
              })}
              onClick={() => {
                toggle("TV");
              }}
            >
              <svg>
                <use href={`${sprite}#tv`} />
              </svg>
              TV
            </button>
          </li>

          <li>
            <button
              type="button"
              className={clsx(css.filterBtn, {
                [css.checked]: equipment.radio,
              })}
              onClick={() => {
                toggle("radio");
              }}
            >
              <svg>
                <use href={`${sprite}#radio`} />
              </svg>
              Radio
            </button>
          </li>

          <li>
            <button
              type="button"
              className={clsx(css.filterBtn, {
                [css.checked]: equipment.refrigerator,
              })}
              onClick={() => {
                toggle("refrigerator");
              }}
            >
              <svg>
                <use href={`${sprite}#refrigerator`} />
              </svg>
              Refrigerator
            </button>
          </li>

          <li>
            <button
              type="button"
              className={clsx(css.filterBtn, {
                [css.checked]: equipment.microwave,
              })}
              onClick={() => {
                toggle("microwave");
              }}
            >
              <svg style={{ fill: "none", stroke: "black" }}>
                <use href={`${sprite}#microwave`} />
              </svg>
              Microwave
            </button>
          </li>

          <li>
            <button
              type="button"
              className={clsx(css.filterBtn, {
                [css.checked]: equipment.gas,
              })}
              onClick={() => {
                toggle("gas");
              }}
            >
              <svg style={{ fill: "none", stroke: "black" }}>
                <use href={`${sprite}#gas`} />
              </svg>
              Gas
            </button>
          </li>

          <li>
            <button
              type="button"
              className={clsx(css.filterBtn, {
                [css.checked]: equipment.water,
              })}
              onClick={() => {
                toggle("water");
              }}
            >
              <svg style={{ fill: "none", stroke: "black" }}>
                <use href={`${sprite}#water`} />
              </svg>
              Water
            </button>
          </li>
        </ul>
      </div>
      <h3 className={css.filterTitle}>Vehicle type</h3>
      <hr />
      <div>
        <ul className={css.type}>
          <li>
            <button
              type="button"
              className={clsx(css.filterBtn, {
                [css.checked]: isType("panelTruck"),
              })}
              onClick={() => {
                toggleType("panelTruck");
              }}
            >
              <svg>
                <use href={`${sprite}#van`} />
              </svg>
              Van
            </button>
          </li>

          <li>
            <button
              type="button"
              className={clsx(css.filterBtn, {
                [css.checked]: isType("alcove"),
              })}
              onClick={() => {
                toggleType("alcove");
              }}
            >
              <svg>
                <use href={`${sprite}#alcove`} />
              </svg>
              Alcove
            </button>
          </li>

          <li>
            <button
              type="button"
              className={clsx(css.filterBtn, {
                [css.checked]: isType("fullyIntegrated"),
              })}
              onClick={() => {
                toggleType("fullyIntegrated");
              }}
            >
              <svg>
                <use href={`${sprite}#fullyIntegrated`} />
              </svg>
              Fully Integrated
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Filters;

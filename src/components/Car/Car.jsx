import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import css from "./Car.module.css";
import sprite from "../../assets/sprite.svg";
import FeaturesList from "../FeaturesList/FeaturesList";
import { useDispatch, useSelector } from "react-redux";
import { addChosen } from "../../redux/chosen/reduxChosen";
import { selectChosen } from "../../redux/chosen/choseSelectors";
import clsx from "clsx";

const Car = ({ data }) => {
  const dispatch = useDispatch();
  const chosen = useSelector(selectChosen);
  const locationCatalog = useLocation();

  const choose = (car) => {
    dispatch(addChosen(car));
  };

  const isChosen = (id) => {
    return chosen.some((car) => car.id === id);
  };
  return (
    <>
      <div className={css.thumbCont}>
        <img
          src={data.gallery[0].thumb}
          alt={`Gallery item`}
          className={css.img}
        />
      </div>
      <div className={css.info}>
        <div className={css.h2Wraper}>
          <h2 className={css.h2Name}>{data.name}</h2>
          <h2>€{data.price}.00</h2>
          <button
            type="button"
            className={clsx(css.likeBtn, {
              [css.checked]: isChosen(data.id),
            })}
            onClick={() => {
              choose(data);
            }}
          >
            <svg className={css.svgBtn} style={{ width: "24", height: "24" }}>
              <use href={`${sprite}#heart`} />
            </svg>
          </button>
        </div>
        <p>
          <svg
            className={css.svg}
            style={{ width: "16", height: "16", fill: "var(--rating)" }}
          >
            <use href={`${sprite}#star`} />
          </svg>
          {data.rating}({data.reviews.length} Reviews){" "}
          <svg
            className={css.svgMap}
            style={{ width: "16", height: "16", fill: "black" }}
          >
            <use href={`${sprite}#map`} />
          </svg>{" "}
          {data.location}
        </p>
        <p className={css.description}>{data.description}</p>
        <FeaturesList car={data} />
        <Link to={`/catalog/${data.id}`} state={locationCatalog}>
          <Button text="Show more" addClass="btn" />
        </Link>
      </div>
    </>
  );
};

export default Car;

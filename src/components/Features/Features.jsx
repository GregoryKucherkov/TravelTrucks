import { useSelector } from "react-redux";
import { selectCarDetails } from "../../redux/cars/carsSelectors";
import FeaturesList from "../FeaturesList/FeaturesList";
import css from "./Features.module.css";

const Features = () => {
  const details = useSelector(selectCarDetails);

  return (
    <section className={css.featuresSection}>
      <FeaturesList car={details} addClass="update" />
      <h3 className={css.h3Details}>Vehicle Details</h3>

      <hr />
      <ul className={css.detailsUl}>
        <li className={css.detailsLi}>
          Form<span className={css.type}>{details.form}</span>
        </li>
        <li className={css.detailsLi}>
          Length <span>{details.length}</span>
        </li>
        <li className={css.detailsLi}>
          Width <span>{details.width}</span>
        </li>
        <li className={css.detailsLi}>
          Height <span>{details.height}</span>
        </li>
        <li className={css.detailsLi}>
          Tank <span>{details.tank}</span>
        </li>
        <li className={css.detailsLi}>
          Consumption <span>{details.consumption}</span>
        </li>
      </ul>
    </section>
  );
};

export default Features;

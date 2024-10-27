import { useDispatch, useSelector } from "react-redux";
import { carDetails } from "../../redux/cars/CarsOps";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { selectCarDetails } from "../../redux/cars/carsSelectors";
import BookForm from "../../components/BookForm/BookForm";
import { useEffect } from "react";
import { Container } from "../../components/Container/Container";
import css from "./CatalogDetails.module.css";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";

const CatalogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(selectCarDetails);

  useEffect(() => {
    if (id) {
      dispatch(carDetails(id));
    }
  }, [dispatch, id]);

  const linkClassName = ({ isActive }) =>
    clsx(css.additionalLink, isActive && css.current);

  return (
    <section>
      {details && (
        <Container>
          <h2 className={css.h2Name}>{details.name}</h2>
          <p className={css.details}>
            <svg
              className={css.svg}
              style={{ width: "16", height: "16", fill: "var(--rating)" }}
            >
              <use href={`${sprite}#star`} />
            </svg>
            {details.rating}({details.reviews.length} Reviews){" "}
            <svg
              className={css.svgMap}
              style={{ width: "16", height: "16", fill: "black" }}
            >
              <use href={`${sprite}#map`} />
            </svg>{" "}
            {details.location}
          </p>
          <h2 className={css.h2Price}>€ {details.price}</h2>

          <ul className={css.imgUl}>
            {details.gallery.map((pic) => (
              <li key={pic.original}>
                <div className={css.thumb}>
                  <img
                    className={css.img}
                    src={pic.original}
                    alt="Gallery item"
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className={css.description}>{details.description}</p>

          <ul className={css.additionalLinks}>
            <li>
              <h3>
                <NavLink className={linkClassName} to="features">
                  Features
                </NavLink>
              </h3>
            </li>
            <li>
              <h3>
                <NavLink className={linkClassName} to="reviews">
                  Reviews
                </NavLink>
              </h3>
            </li>
          </ul>
          <hr />

          <div className={css.outlets}>
            <Outlet />
            <BookForm />
          </div>
        </Container>
      )}
    </section>
  );
};

export default CatalogDetails;

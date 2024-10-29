import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiltered } from "../../redux/cars/CarsOps";
import CarsList from "../../components/CarsList/CarsList";
import Location from "../../components/Location/Location";
import Filters from "../../components/Filters/Filters";
import Button from "../../components/Button/Button";
import { clearCars, incrementPage } from "../../redux/cars/carsSlice";
import {
  selectCars,
  selectCurrentPage,
  selectError,
  selectLoading,
} from "../../redux/cars/carsSelectors";
import { selectFilters } from "../../redux/filters/filterSelectors";
import { Container } from "../../components/Container/Container";
import css from "./Catalog.module.css";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMsg/ErrorMsg";
import { useLocation, useNavigate } from "react-router-dom";
import { selectChosen } from "../../redux/chosen/choseSelectors";

const Catalog = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const currentFilters = useSelector(selectFilters);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectCars);
  const location = useLocation();
  const selectedCars = useSelector(selectChosen);
  const isSelectedPage = location.pathname === "/catalog/favorites";
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFiltered({ page: 1 }));
  }, [dispatch]);

  const handlePage = () => {
    dispatch(incrementPage());
    dispatch(fetchFiltered({ filters: currentFilters, page: currentPage + 1 }));
  };

  const handleFilterRequest = () => {
    dispatch(clearCars());
    if (isSelectedPage) {
      navigate("/catalog");
    }
    dispatch(fetchFiltered({ filters: currentFilters, page: 1 }));
  };

  const carsToRender = isSelectedPage ? selectedCars : cars;

  return (
    <Container className={css.columns}>
      <section className={css.filterSection}>
        <Location />
        <Filters />
        <Button text="Search" onClick={handleFilterRequest} />
      </section>
      <section>
        <CarsList cars={carsToRender} />
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {!isSelectedPage && (
          <Button text="Load More" addClass="viewMore" onClick={handlePage} />
        )}
      </section>
    </Container>
  );
};

export default Catalog;

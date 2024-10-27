import { useSelector } from "react-redux";
import css from "./CarsList.module.css";
import { selectCars } from "../../redux/cars/carsSelectors";
import Car from "../Car/Car";
import { useMemo } from "react";

const CarsList = () => {
  const cars = useSelector(selectCars);
  // const filteredCars = useSelector(selectFilteredCars);

  //not using memo
  //   return (
  //     <ul className={css.carList}>
  //       {cars.map((car) => (
  //         <li key={car.id}>
  //           <Car data={car}></Car>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  //using memo to avoid re-renders for filter changing
  const carList = useMemo(() => {
    return cars.map((car) => (
      <li className={css.cardLi} key={car.id}>
        <Car data={car} />
      </li>
    ));
  }, [cars]);

  return <ul className={css.carList}>{carList}</ul>;
};

export default CarsList;

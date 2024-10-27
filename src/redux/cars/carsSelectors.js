export const selectCars = (state) => state.cars.cars;

export const selectCurrentPage = (state) => state.cars.currentPage;

export const selectCarDetails = (state) => state.cars.carDetails;

export const selectLoading = (state) => state.cars.loading;

export const selectError = (state) => state.cars.error;

// export const selectFilteredCars = createSelector(
//   [selectCars, selectEquipment, selectType],
//   (cars, equipement, type) =>
//     cars.filter((car) => {
//       const equipmentMatch =
//         equipement.length === 0 ||
//         equipement.every((feature) => {
//           return car[feature] === true;
//         });

//       const typeMatch =
//         type.length === 0 || type.some((t) => car.form.includes(t));
//       return equipmentMatch && typeMatch;
//     })
// );

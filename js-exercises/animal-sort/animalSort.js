const animalSort = animals => {
  return animals.sort((currentAnimal, nextAnimal) => parseInt(currentAnimal.numberOfLegs) !== parseInt(nextAnimal.numberOfLegs) ? parseInt(currentAnimal.numberOfLegs) - parseInt(nextAnimal.numberOfLegs) : (currentAnimal.name > nextAnimal.name) * 2 - 1)
};
export { animalSort };

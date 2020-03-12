// eslint-disable-next-line max-len
const animalSort = animals => animals.sort((currentAnimal, nextAnimal) => (parseInt(currentAnimal.numberOfLegs, 10) !== parseInt(nextAnimal.numberOfLegs, 10) ? parseInt(currentAnimal.numberOfLegs, 10) - parseInt(nextAnimal.numberOfLegs, 10) : (currentAnimal.name > nextAnimal.name) * 2 - 1));
export { animalSort };

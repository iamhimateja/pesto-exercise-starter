function updateInventory(args) {
  const currentInventory = args[0];
  const newInventory = args[1];
  for (const newItem of newInventory) {
    let itemFound = false;
    for (const index in currentInventory) {
      if (currentInventory[index][1] === newItem[1]) {
        currentInventory[index][0] += newItem[0];
        itemFound = true;
        break;
      }
    }
    if (!itemFound) {
      currentInventory.push(newItem);
    }
  }

  currentInventory.sort((currentItem, nextItem) => {
    if (currentItem[1] >= nextItem[1]) return 1;
    return -1;
  });

  return currentInventory;
}

export {
  updateInventory,
};

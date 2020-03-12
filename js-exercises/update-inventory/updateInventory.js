function updateInventory(currentInventory, newInventory) {
  for (let newItem of newInventory) {
    let itemFound = false;
    for (let i = 0; i < currentInventory.length; ++i) {
      if (currentInventory[i][1] === newItem[1]) {
        currentInventory[i][0] += newItem[0];
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

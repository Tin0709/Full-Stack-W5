let account = {
  firstName: "Tin",
  lastName: "Nguyen",
  address: "123 Main St, Abcd",
};

export function getAccountData() {
  return { ...account }; // simulate fetch
}

export function saveAccountData(newData) {
  account = { ...newData }; // simulate save
}

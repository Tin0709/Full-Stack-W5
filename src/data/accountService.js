let account = {
  firstName: "John",
  lastName: "Doe",
  address: "123 Main St, Springfield",
};

export function getAccountData() {
  return { ...account }; // simulate fetch
}

export function saveAccountData(newData) {
  account = { ...newData }; // simulate save
}

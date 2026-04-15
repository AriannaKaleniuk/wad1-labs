import JsonStore from "./json-store.js";

const stevieStore = new JsonStore("./models/stevie-store.json", { employees: {} });

export function getAppInfo() {
  return stevieStore.db.data.employees;
}


export default stevieStore;
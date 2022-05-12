import { changeActivePage } from "./utils.mjs"

const orderNameDesc = () => {
  changeActivePage("order", "name-desc");
}

const orderNameAsc = () => {
  changeActivePage("order", "name-asc");
}

export { orderNameDesc, orderNameAsc }
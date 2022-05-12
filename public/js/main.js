import { orderNameDesc, orderNameAsc } from "./modules/memberList.mjs"

const orderNameDescBtn = document.getElementById("orderNameDesc");
const orderNameAscBtn = document.getElementById("orderNameAsc");

orderNameDescBtn.addEventListener("click" , orderNameDesc);
orderNameAscBtn.addEventListener("click" , orderNameAsc);
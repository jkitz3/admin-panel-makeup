"use strict";

function filterOrdersByStatus(array, status) {
  return Array.isArray(array)
    ? array.filter((item) => item["order-status"] === status)
    : `${array} не является массивом!`;
}

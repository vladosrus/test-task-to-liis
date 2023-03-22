import { getCheckOutDate } from "./constants";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject({ promise: res.json(), status: res.status });
  }
}
export function getHotels(location, date, days) {
  return fetch(
    `https://engine.hotellook.com/api/v2/cache.json?location=${location}&checkIn=${date}&checkOut=${getCheckOutDate(date, Number(days))}&adults=1&currency=rub&limit=10`,
    {
      method: "GET",
    }
  ).then(checkResponse);
}

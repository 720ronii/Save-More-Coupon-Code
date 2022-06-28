export const GetDateString = (
  date
) => {
  var day = new Date(date);
  var dd = String(
    day.getDate()
  ).padStart(2, "0");
  var mm = String(
    day.getMonth() + 1
  ).padStart(2, "0"); //January is 0!
  var yyyy =
    day.getFullYear();
  return (
    dd + "/" + mm + "/" + yyyy
  );
};

export const API_URL = 'http://hashcoupons.com/api'
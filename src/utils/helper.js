export const formatNumber = (number) => {
  if (number >= 10000000) {
    return (number / 10000000).toFixed(2) + ' Cr';
  } else if (number >= 100000) {
    return (number / 100000).toFixed(1) + ' Lakh';
  }
  return number.toString();
};

export function getTimeDifference(dateString) {
  // Parse the input date string
  const inputDate = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - inputDate;

  // Calculate the time difference in days, months, and years
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const monthsDifference = Math.floor(daysDifference / 30); // Assuming 30 days per month
  const yearsDifference = Math.floor(monthsDifference / 12);

  // Construct the result string
  let result = '';
  if (yearsDifference > 0) {
    result += yearsDifference + (yearsDifference === 1 ? ' year' : ' years');
  }
  if (monthsDifference > 0) {
    result +=
      (result ? ', ' : '') +
      monthsDifference +
      (monthsDifference === 1 ? ' month' : ' months');
  }
  if (daysDifference > 0) {
    result +=
      (result ? ', ' : '') +
      daysDifference +
      (daysDifference === 1 ? ' day' : ' days');
  }

  // Return the result
  return result || 'Just now';
}

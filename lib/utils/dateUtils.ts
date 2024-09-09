import moment from "moment";

/**
 *
 * @param date - The date to be formatted
 * @param format - The desired date format
 * @returns A string representing a date in the desired format
 */
const formatDate = (date: Date, format: string = "DD.MM.YYYY"): string =>
  moment(date).format(format);

export default formatDate;

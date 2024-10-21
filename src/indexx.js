import { format } from 'date-fns';

// Create a date object
const date = new Date(); // or new Date('2024-10-19')

// Format the date to get the day of the week
const dayOfWeek = format(date, 'EEEE');

console.log(dayOfWeek); // Output: Saturday (or whatever day it is)

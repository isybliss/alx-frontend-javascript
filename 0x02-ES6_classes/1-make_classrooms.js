import Classroom from './0-classroom';

export default function initializeRooms() {
  const arr = [];

  arr.push(new Classroom(19));
  arr.push(new Classroom(20));
  arr.push(new Classroom(34));

  return arr;
}

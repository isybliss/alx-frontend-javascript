import {
  uploadPhoto,
  createUser,
} from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      const { body } = value.shift();
      const { firstName, lastName } = value.pop();
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

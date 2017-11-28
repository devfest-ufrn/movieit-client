import movies from './movies';
import sessions from './sessions';

// Import and combine your sagas
export default function* root() {
  yield [
    movies(),
    sessions()
  ];
}

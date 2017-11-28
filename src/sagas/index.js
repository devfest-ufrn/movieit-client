import movies from './movies';

// Import and combine your sagas
export default function* root() {
  yield [
    movies()
  ];
}

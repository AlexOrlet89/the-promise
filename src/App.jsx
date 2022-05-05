import {
  asyncGetCards,
  fetchAsyncTryCards,
  fetchThenCards,
} from './services/promise-me';

export default function App() {
  asyncGetCards();
  fetchThenCards();
  fetchAsyncTryCards();
  return (
    <>
      <h1>Hello World</h1>;
    </>
  );
}

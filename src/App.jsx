import {
  asyncGetCards,
  fetchAsyncTryCards,
  fetchThenCards,
  fetchThenCatchCards,
} from './services/promise-me';

export default function App() {
  asyncGetCards();
  fetchThenCards();
  fetchAsyncTryCards();
  fetchThenCatchCards();
  return (
    <>
      <h1>Hello World</h1>;
    </>
  );
}

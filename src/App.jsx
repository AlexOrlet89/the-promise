import {
  asyncGetCards,
  fetchAsyncTryCards,
  fetchAsyncTryFinallyCards,
  fetchThenCards,
  fetchThenCatchCards,
} from './services/promise-me';

export default function App() {
  asyncGetCards();
  fetchThenCards();
  fetchAsyncTryCards();
  fetchThenCatchCards();
  fetchAsyncTryFinallyCards();
  return (
    <>
      <h1>Hello World</h1>;
    </>
  );
}

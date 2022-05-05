import { asyncGetCards, fetchThenCards } from './services/promise-me';

export default function App() {
  asyncGetCards();
  fetchThenCards();
  return (
    <>
      <h1>Hello World</h1>;
    </>
  );
}

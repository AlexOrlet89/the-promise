import { asyncGetCards } from './services/promise-me';

export default function App() {
  asyncGetCards();

  return (
    <>
      <h1>Hello World</h1>;
    </>
  );
}

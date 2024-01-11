import "./App.css";
// import { favouriteBooks } from "./BookList";
// import { Product } from "./Product";
import { BookList } from "./BookList";
import data from "./index.json";

export const App = () => {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={data} />
    </>
  );
};

import "./App.css";
// import { favouriteBooks } from "./BookList";
// import { Product } from "./Product";
import { BookList } from "./BookList";
import { favouriteBooks } from "./Server";
import { Alert } from "./Alert";

export const App = () => {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      <Alert variont="good">All good!</Alert>
      <Alert variont="warning">
        Payment received, thank you for your purchase!
      </Alert>
      <Alert variont="error">There was an error during transaction!</Alert>
    </>
  );
};

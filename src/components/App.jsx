import "./App.css";
import { BookList } from "./BookList";
import { favouriteBooks } from "./Server";
import { Alert } from "./Alert";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

export const App = () => {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      <HiOutlineArrowLongDown />
      <Alert variont="good">All good!</Alert>
      <Alert variont="warning">
        Payment received, thank you for your purchase!
      </Alert>
      <Alert variont="error">There was an error during transaction!</Alert>
    </>
  );
};

export const App1 = () => {
  const handleClick = () => {
    alert("I'm a button!");
  };

  return <button onClick={handleClick}>Click me!</button>;
};

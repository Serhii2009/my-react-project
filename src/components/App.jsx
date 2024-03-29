import "./App.css";
import { BookList } from "./BookList";
import { favouriteBooks } from "./Server";
import { Alert } from "./Alert";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { SearchBar } from "./SearchBar";
import { LangSwitcher } from "./LangSwitcher ";
import { LoginForm } from "./LoginForm ";
// import { FeedbackForm } from "./initialValues";

export const App = () => {
  return (
    <>
      {/* <FeedbackForm /> */}
      <LoginForm />
      <h1>Books of the week</h1>
      <LangSwitcher />
      <SearchBar />
      <BookList books={favouriteBooks} />
      <HiOutlineArrowLongDown />
      <Alert variont="good">All good!</Alert>
      <App1 />
      <Alert variont="warning">
        Payment received, thank you for your purchase!
      </Alert>
      <CustomButton message="Playing music!">Play some music</CustomButton>
      <CustomButton message="Uploading your data!">Upload data</CustomButton>
      <Alert variont="error">There was an error during transaction!</Alert>
      <App2 />
    </>
  );
};

export const App1 = () => {
  const handleClick = () => {
    alert("I'm a button!");
  };

  return <button onClick={handleClick}>Click me!</button>;
};

// -------------------

export const App2 = () => {
  const handleClick = (evt) => {
    console.log(evt);
  };

  return (
    <>
      <button onClick={handleClick}>First button</button>
      <button onClick={(evt) => console.log(evt)}>Second button</button>
    </>
  );
};

// ----------------------

export const CustomButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

import "./Alert.css";

const changeVariont = (variont) => {
  switch (variont) {
    case "good":
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";

    default:
      throw new Error(`Unsupported variant prop value - ${variont}`);
  }
};

export const Alert = ({ variont, children }) => {
  return (
    <p
      className="alert"
      style={{
        backgroundColor: changeVariont(variont),
      }}
    >
      {children}
    </p>
  );
};

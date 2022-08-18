export function SignupBtnActivate({ setLogin }) {
  return (
    <button
      className="modal-button"
      style={{
        backgroundColor: "transparent",
      }}
      onClick={() => {
        setLogin(true);
      }}
    >
      Sign Up
    </button>
  );
}

export function SignupBtnDeactivate({ setLogin }) {
  return (
    <button
      className="modal-button"
      style={{
        backgroundColor: "gainsboro",
      }}
      onClick={() => {
        setLogin(false);
      }}
    >
      Sign Up
    </button>
  );
}

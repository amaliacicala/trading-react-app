export function LoginBtnActivate({ setLogin }) {
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
      Login
    </button>
  );
}

export function LoginBtnDeactivate({ setLogin }) {
  return (
    <button
      className="modal-button"
      style={{
        backgroundColor: "gainsboro",
      }}
      onClick={() => {
        setLogin(true);
      }}
    >
      Login
    </button>
  );
}

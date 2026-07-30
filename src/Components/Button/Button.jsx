import "./Button.css";

function Button({ children, btnClass }) {
  return (
    <>
      <button className={`btn ${btnClass}`}>{children}</button>
    </>
  );
}
export default Button;

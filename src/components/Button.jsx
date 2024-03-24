/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Button({ to, children, type = "custom" }) {
  return (
    <a href={to} className={`btn ${type}-btn ${type}-btn-bg custom-btn-link`}>
      {children}
    </a>
  );
}

export default Button;

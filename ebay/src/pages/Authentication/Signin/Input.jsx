import { forwardRef } from "react";
const Input = forwardRef(function Input({ placeholder, type, ...props }, ref) {
  let content = <input ref={ref} placeholder={placeholder} {...props} />;
  if (type === "password") {
    content = (
      <input ref={ref} placeholder={placeholder} {...props} type="password" />
    );
  }

  return <>{content}</>;
});

export default Input;

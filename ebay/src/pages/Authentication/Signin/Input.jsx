export default function Input({ placeholder, type, ...props }) {
  let content = <input placeholder={placeholder} {...props} />;
  if (type === "password") {
    content = <input placeholder={placeholder} {...props} type="password" />;
  }
  return <>{content}</>;
}

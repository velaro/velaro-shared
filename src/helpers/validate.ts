export default function validate(
  value: string,
  type: string,
  required: boolean
) {
  if (required && !value) {
    return "A value is required";
  }

  switch (type) {
    case "email":
      return (
        !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email"
      );
    case "phone":
      return !value || /^\d{10}$/.test(value) || "Invalid phone number";
    case "number":
      return !value || /^\d+$/.test(value) || "Invalid number";
    default:
      return true;
  }
}

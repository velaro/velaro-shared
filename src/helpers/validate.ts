export default function validate(
  value: string,
  type: string,
  required: boolean
) {
  if (required && !value) {
    return "A value is required";
  }

  if (!value) {
    return null;
  }

  switch (type) {
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email";
    case "phone":
      return /^\d{10}$/.test(value) || "Invalid phone number";
    case "number":
      return /^\d+$/.test(value) || "Invalid number";
    default:
      return null;
  }
}

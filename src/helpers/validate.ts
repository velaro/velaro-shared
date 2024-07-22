export default function validate(
  value: string,
  type: string,
  required: boolean
) {
  if (
    required &&
    (!value || value == "undefined" || value == "--select an option--")
  ) {
    return "A value is required";
  }

  if (!value) {
    return null;
  }

  switch (type) {
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "Invalid email";
    case "phone":
      return /^\d{10}$/.test(value) ? null : "Invalid phone number";
    case "number":
      return /^\d+$/.test(value) ? null : "Invalid number";
    default:
      return null;
  }
}

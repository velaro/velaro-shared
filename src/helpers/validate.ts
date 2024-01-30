export default function validate(type: string, value: string) {
  switch (type) {
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    case "phone":
      return /^\d{10}$/.test(value);
    case "number":
      return /^\d+$/.test(value);
    default:
      return true;
  }
}

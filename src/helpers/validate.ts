export default function validate(type: string, value: string) {
  switch (type) {
    case "email":
      return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    case "phone":
      return !value || /^\d{10}$/.test(value);
    case "number":
      return !value || /^\d+$/.test(value);
    default:
      return true;
  }
}

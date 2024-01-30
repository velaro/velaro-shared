export default function useValidator(type: string, value: string) {
  const validate = function () {
    switch (type) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "phone":
        return /^\d{10}$/.test(value);
      case "number":
        return /^\d+$/.test(value);
      default:
        return false;
    }
  };

  return { validate };
}

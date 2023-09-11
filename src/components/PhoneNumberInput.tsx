import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";

interface Props {
  onChange: (value: string) => void;
  placeholder?: string;
  phone: string;
  country?: string;
}

export default function PhoneNumberInput({
  onChange,
  placeholder = "Enter phone number",
  phone,
  country = "us"
}: Props) {
  return (
    <PhoneInput
      placeholder={placeholder}
      flags={flags}
      country={country}
      className="input block w-full phone-input focus-visible:outline-none focus-visible:border-blue-600"
      value={phone}
      onChange={onChange}
      defaultCountry={"US"}
    />
  );
}

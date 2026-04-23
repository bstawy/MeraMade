// components/JoinForm/JoinForm.tsx
"use client";

import React, { useState } from "react";
import { useSnack } from "@/snackbar/useSnack";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import styles from "./JoinSection.module.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (value: string) => {
  if (!value) return "Email address is required.";
  if (!EMAIL_REGEX.test(value)) return "Please enter a valid email address.";
  return null;
};

const JoinForm = ({ onSubmit }: { onSubmit?: (email: string) => void }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  const { showSnack } = useSnack();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (isDirty) setError(validateEmail(value));
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsDirty(true);

    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      showSnack("error", "Oops!", "Please enter a valid email.");
      return;
    }

    setError(null);
    showSnack("success", "Welcome!", "Check your inbox for a welcome note.");
    onSubmit?.(email);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <Input
        type="email"
        value={email}
        onChange={handleChange}
        onBlur={() => email && setIsDirty(true)}
        placeholder="Email Address"
      />
      <Button label="Subscribe" size="md" type="submit" />
    </form>
  );
};

export default JoinForm;

// components/Toast.tsx
"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

export const Toast = ({ message }: { message: string }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div
      className={`fixed bottom-4 right-4 bg-green-100 text-green-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-opacity ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <CheckCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
};

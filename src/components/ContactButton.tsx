"use client";
import React, { useState } from "react";
import MailFilledIcon from "@/components/ui/mail-filled-icon";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      type="button"
      aria-label="Contact"
      className="fixed left-4 bottom-0 -translate-y-1/2 z-10 size-14 flex items-center justify-center rounded-full border hover:border-2 transition-all ease-in-out "
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <MailFilledIcon size={28} />
    </button>
  );
};

export default ContactButton;

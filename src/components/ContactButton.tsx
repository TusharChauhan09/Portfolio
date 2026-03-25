"use client";
import React, { useState } from "react";
import MailFilledIcon from "@/components/ui/mail-filled-icon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ContactFormFields } from "@/components/Home/ContactForm";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Contact"
        className="fixed left-4 bottom-0 -translate-y-1/2 z-10 size-14 flex items-center justify-center rounded-full border hover:border-2 transition-all ease-in-out"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MailFilledIcon size={28} />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="BentoCard !fixed !border-border !p-6 sm:!max-w-md">
          <DialogHeader>
            <DialogTitle className="jap text-2xl">Get in Touch</DialogTitle>
            <DialogDescription className="small-text text-[12px] text-muted-foreground">
              Drop me a message and I&apos;ll get back to you.
            </DialogDescription>
          </DialogHeader>
          <ContactFormFields compact />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactButton;

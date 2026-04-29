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
import XIcon from "@/components/Home/BentoCards/Icons/XIcon";
import LinkedinIcon from "@/components/Home/BentoCards/Icons/LinkedinIcon";

const socials = [
  {
    label: "X",
    href: "https://x.com/TusharChau09",
    Component: XIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tushar9/",
    Component: LinkedinIcon,
  },
];

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
        <DialogContent className="BentoCard !fixed !border-border !p-6 sm:!max-w-xs overflow-hidden gap-4">
          <DialogHeader className="!text-left">
            <DialogTitle className="jap text-2xl leading-none">
              Get in Touch
            </DialogTitle>
            <DialogDescription className="small-text text-[11px] text-muted-foreground mt-1">
              Hit me up on socials.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center justify-center gap-4 py-2">
            {socials.map(({ label, href, Component }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="cursor-pointer transition-transform hover:scale-110"
              >
                <Component size={56} />
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactButton;

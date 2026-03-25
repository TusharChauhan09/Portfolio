"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const fieldVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.35, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function ContactFormFields({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full bg-transparent border border-border rounded-lg px-3 py-2 text-sm smalll placeholder:text-muted-foreground/50 outline-none focus:border-foreground transition-colors";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
      {/* Name */}
      <motion.div
        className="flex flex-col gap-1.5"
        variants={fieldVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <label
          htmlFor={compact ? "modal-name" : "name"}
          className="smalll text-[11px] text-muted-foreground"
        >
          Name
        </label>
        <input
          id={compact ? "modal-name" : "name"}
          type="text"
          placeholder="Your name"
          {...register("name")}
          className={inputClass}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.span
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="small-text text-[11px] text-destructive overflow-hidden"
            >
              {errors.name.message}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Email */}
      <motion.div
        className="flex flex-col gap-1.5"
        variants={fieldVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <label
          htmlFor={compact ? "modal-email" : "email"}
          className="smalll text-[11px] text-muted-foreground"
        >
          Email
        </label>
        <input
          id={compact ? "modal-email" : "email"}
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className={inputClass}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.span
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="small-text text-[11px] text-destructive overflow-hidden"
            >
              {errors.email.message}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Message */}
      <motion.div
        className="flex flex-col gap-1.5"
        variants={fieldVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <label
          htmlFor={compact ? "modal-message" : "message"}
          className="smalll text-[11px] text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id={compact ? "modal-message" : "message"}
          rows={compact ? 3 : 4}
          placeholder="What's on your mind?"
          {...register("message")}
          className={`${inputClass} resize-none`}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.span
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="small-text text-[11px] text-destructive overflow-hidden"
            >
              {errors.message.message}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Submit */}
      <motion.div
        variants={fieldVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="smalll text-xs px-5 py-2 rounded-lg border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending"
            ? "Sending..."
            : status === "sent"
              ? "Sent!"
              : status === "error"
                ? "Failed — try again"
                : "Send Message"}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {status === "sent" && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="small-text text-[11px] text-muted-foreground"
          >
            Thanks for reaching out! I&apos;ll get back to you soon.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

export default function ContactForm() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4">
      <motion.h2
        className="jap text-3xl mb-4"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="BentoCard !items-start !justify-start !p-5"
      >
        <div className="BentoCard-content w-full">
          <ContactFormFields />
        </div>
      </motion.div>
    </div>
  );
}

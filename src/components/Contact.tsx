"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Phone, Send } from "lucide-react";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

function sanitizePhone(phone: string) {
  return phone.replace(/[^0-9+]/g, "").trim();
}

export default function Contact() {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    if (!form.name.trim() || form.name.trim().length < 2) {
      toast.error("Please enter a valid name.");
      return false;
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const rawPhone = sanitizePhone(form.phone);
    if (!rawPhone || !/^\+?[0-9]{7,15}$/.test(rawPhone)) {
      toast.error("Please enter a valid international phone number.");
      return false;
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      toast.error("Please write a longer message.");
      return false;
    }

    if (form.website.trim().length > 0) {
      toast.error("Spam detected.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const text = await response.text();
      let data: { message?: string; success?: boolean } | null = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = null;
      }

      if (!response.ok) {
        throw new Error(data?.message || text || "Unable to send message.");
      }

      setStatus("idle");
      toast.success(data?.message || "Message sent successfully.");
      setForm(initialFormState);
    } catch (error) {
      setStatus("idle");
      toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[#060606]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="neon-text-cyan">Me</span>
          </h2>
          <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full neon-glow-cyan"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glassmorphism p-8 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.08)]"
          >
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-3xl bg-[#070707]/80 p-6 text-center lg:text-left">
                <p className="text-sm uppercase tracking-[0.25em] text-text-secondary mb-2">
                  Email
                </p>
                <p className="text-foreground font-semibold">contact@abdulrehman.sbs</p>
              </div>
              <div className="rounded-3xl bg-[#070707]/80 p-6 text-center lg:text-left">
                <p className="text-sm uppercase tracking-[0.25em] text-text-secondary mb-2">
                  Gmail
                </p>
                <p className="text-foreground font-semibold">abdulrehmanazizsheikh@gmail.com</p>
              </div>
              <div className="rounded-3xl bg-[#070707]/80 p-6 text-center lg:text-left">
                <p className="text-sm uppercase tracking-[0.25em] text-text-secondary mb-2">
                  Phone
                </p>
                <p className="text-foreground font-semibold">+92 318 1272010</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="glassmorphism p-8 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.08)]"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">Send Message</h3>

            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr]">
              <div className="grid gap-6 max-w-xl">
                <label className="block text-sm font-medium text-text-secondary">
                  Name
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20"
                    placeholder="Your full name"
                    required
                  />
                </label>

                <label className="block text-sm font-medium text-text-secondary">
                  Email
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20"
                    placeholder="you@example.com"
                    required
                  />
                </label>

                <label className="block text-sm font-medium text-text-secondary">
                  Phone Number
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) => handleChange("phone", event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20"
                    placeholder="+92 300 1234567"
                    required
                  />
                </label>

                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(event) => handleChange("website", event.target.value)}
                  className="hidden"
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <div className="grid gap-6">
                <label className="block text-sm font-medium text-text-secondary">
                  Message
                  <textarea
                    value={form.message}
                    onChange={(event) => handleChange("message", event.target.value)}
                    className="mt-2 w-full min-h-[260px] rounded-3xl border border-white/10 bg-[#0a0a0a] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20"
                    placeholder="Write your project brief or message here..."
                    required
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-8 w-full rounded-full bg-neon-cyan px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
        <ToastContainer position="bottom-right" autoClose={4000} hideProgressBar closeOnClick pauseOnHover draggable pauseOnFocusLoss />
      </div>
    </section>
  );
}

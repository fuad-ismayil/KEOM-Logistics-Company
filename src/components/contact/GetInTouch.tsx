"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Turnstile } from "react-turnstile";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_GETINTOUCH_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

export default function GetInTouch() {
    const formRef = useRef<HTMLFormElement>(null);
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!turnstileToken) {
            setStatus("error");
            return;
        }

        const form = formRef.current;
        if (!form) return;

        const formData = new FormData(form);

        const templateParams = {
            name: formData.get("fullName") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            subject: formData.get("subject") as string,
            message: formData.get("message") as string,
        };

        setStatus("sending");

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );
            setStatus("sent");
            form.reset();
            setTimeout(() => setStatus("idle"), 4000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <div className="w-full lg:w-[65%] max-w-[856px] bg-[#f5f5f5] p-8 md:p-14">
            <div className="mb-10 text-center">
                <h2 className="text-[#1a3b50] text-4xl font-bold">Get In Touch</h2>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    className="w-full bg-white border border-gray-400 px-4 py-3.5 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#eb7342] transition-colors"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full bg-white border border-gray-400 px-4 py-3.5 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#eb7342] transition-colors"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No."
                    className="w-full bg-white border border-gray-400 px-4 py-3.5 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#eb7342] transition-colors"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full bg-white border border-gray-400 px-4 py-3.5 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#eb7342] transition-colors"
                />
                <textarea
                    name="message"
                    placeholder="Write message"
                    rows={5}
                    required
                    className="w-full md:col-span-2 bg-white border border-gray-400 px-4 py-3.5 text-gray-600 placeholder-gray-400 resize-none focus:outline-none focus:border-[#eb7342] transition-colors"
                ></textarea>

                {/* Cloudflare Turnstile */}
                <div className="md:col-span-2 flex justify-center mt-2">
                    <Turnstile
                        sitekey={TURNSTILE_SITE_KEY}
                        onVerify={(token) => setTurnstileToken(token)}
                        onExpire={() => setTurnstileToken(null)}
                        theme="light"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "sending" || !turnstileToken}
                    className="w-full md:col-span-2 bg-[#eb7342] hover:bg-[#d66536] text-white font-bold py-4 px-6 transition-colors mt-2 uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "sending"
                        ? "Sending..."
                        : status === "sent"
                            ? "✓ Message Sent!"
                            : status === "error"
                                ? "Error Sending"
                                : "Submit Now"}
                </button>
            </form>
        </div>
    );
}
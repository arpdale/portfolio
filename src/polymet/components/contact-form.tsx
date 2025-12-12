"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Hidden field for spam protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted ? (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-green-800 dark:text-green-300">
          Thank you for your message! I'll get back to you soon.
        </div>
      ) : (
        <>
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-800 dark:text-red-300">
              {error}
            </div>
          )}

          {/* Honeypot field - hidden from users, bots will fill it */}
          <input
            type="text"
            name="honeypot"
            value={formState.honeypot}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="border-gray-300 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
                className="border-gray-300 dark:border-gray-700"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              className="border-gray-300 dark:border-gray-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              placeholder="Your message"
              rows={5}
              className="border-gray-300 dark:border-gray-700"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-cyan-600 hover:bg-cyan-700 text-white dark:bg-cyan-500 dark:hover:bg-cyan-600 w-full md:w-auto"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message <SendIcon className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </>
      )}
    </form>
  );
}

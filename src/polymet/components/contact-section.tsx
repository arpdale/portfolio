"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import ContactForm from "@/polymet/components/contact-form";
import { MailIcon, LinkedinIcon, MapPinIcon } from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email",
      value: "david.richard@gmail.com",
      link: "mailto:david.richard@gmail.com",
    },
    {
      icon: LinkedinIcon,
      title: "LinkedIn",
      value: "linkedin.com/in/drichard",
      link: "https://linkedin.com/in/drichard",
    },
    {
      icon: MapPinIcon,
      title: "Location",
      value: "Austin | SF",
      link: null,
    },
  ];

  return (
    <section ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={cn(
              "transition-all duration-700 transform",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <ContactForm />
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-700 transform",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-full mr-4">
                      <item.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                          target={item.link.startsWith("http") ? "_blank" : ""}
                          rel={
                            item.link.startsWith("http")
                              ? "noopener noreferrer"
                              : ""
                          }
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">
                  Let's have a conversation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Whether you're looking for a design leader, consultant, or
                  just want to chat about design and technology, I'd love to
                  hear from you. I'm currently open to new opportunities that
                  align with my expertise in healthcare, fintech, and AI-driven
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

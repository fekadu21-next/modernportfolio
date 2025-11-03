import React, { useRef, useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const SERVICE_ID = "service_yzdwu3q";
  const TEMPLATE_ID = "template_25jgrob";
  const PUBLIC_KEY = "N8s0VhP6EBw8qOVXe";

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = formRef.current;
    if (!f) return;

    const name = (f.from_name.value || "").trim();
    const from_email = (f.from_email.value || "").trim();
    const title = (f.subject.value || "").trim();
    const message = (f.message.value || "").trim();

    if (!name || !from_email || !title || !message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    setSending(true);
    setStatus("Sending...");

    const templateParams = {
      name,
      from_email,
      title,
      message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setSending(false);
        f.reset();
        setTimeout(() => setStatus(""), 6000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("❌ Failed to send. Try again later.");
        setSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-white py-16 px-4 md:px-20"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2">Contact</h1>
        <div className="w-16 h-[2px] bg-teal-400 mx-auto mb-4"></div>
        <p className="italic text-gray-700 text-lg">
          Technology Emerges Continuously to Enhance Communication Worldwide.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 w-full md:w-[420px]">
          <div className="flex items-start bg-white rounded-lg shadow-md p-6">
            <div className="text-teal-500 text-3xl mt-1 mr-5">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">Address</h2>
              <p className="text-gray-600">A108 Fasil Road, Gondar, Ethiopia</p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-lg shadow-md p-6">
            <div className="text-teal-500 text-3xl mt-1 mr-5">
              <FaPhoneAlt />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">Call Us</h2>
              <p className="text-gray-600">+2519 45 38 20 96</p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-lg shadow-md p-6">
            <div className="text-teal-500 text-3xl mt-1 mr-5">
              <FaEnvelope />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">Email Us</h2>
              <p className="text-gray-600">fekaduasafew57@gmail.com</p>
            </div>
          </div>

          <div className="mt-4">
            <iframe
              className="w-full h-[320px] rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62299.41504427937!2d37.456448!3d12.601128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164328823d244edf%3A0x7826245358a8a65!2sGondar!5e0!3m2!1sen!2set!4v1746975412588!5m2!1sen!2set"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gondar Map"
            />
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-8 w-full md:w-[520px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-semibold text-gray-700">Your Name</label>
              <input
                type="text"
                name="from_name"
                className="w-full border border-gray-300 p-2 mt-2 rounded-md focus:border-teal-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700">Your Email</label>
              <input
                type="email"
                name="from_email"
                className="w-full border border-gray-300 p-2 mt-2 rounded-md focus:border-teal-400 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="font-semibold text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full border border-gray-300 p-2 mt-2 rounded-md focus:border-teal-400 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="font-semibold text-gray-700">Message</label>
            <textarea
              name="message"
              rows="8"
              className="w-full border border-gray-300 p-2 mt-2 rounded-md focus:border-teal-400 focus:outline-none resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className={`w-full py-3 ${
              sending ? "bg-teal-300" : "bg-teal-500 hover:bg-teal-600"
            } text-white font-semibold rounded-full transition`}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`mt-4 text-center font-medium ${
                status.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

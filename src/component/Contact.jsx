import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white  flex items-center justify-center py-20 px-6">
      <div className="max-w-3xl p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-8">
          We'd love to hear from you! For questions, feedback, or assistance, feel free to reach out to us.
        </p>

        <div className="space-y-6 text-black text-lg">
          <div className="flex items-center justify-center gap-3">
            <FaPhone />
            <span>+966 555 123 456</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope />
            <span>support@saydalia.com</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt />
            <span>Egypt, Giza Alharam</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

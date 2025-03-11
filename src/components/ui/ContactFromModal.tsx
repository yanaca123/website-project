"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactFormModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      reset();
      onClose();
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input {...register("name")} placeholder="Your Name" required className="border p-2 rounded" />
          <input {...register("email")} type="email" placeholder="Your Email" required className="border p-2 rounded" />
          <input {...register("company")} placeholder="Company Name" className="border p-2 rounded" />
          <textarea {...register("message")} placeholder="Your Message" required className="border p-2 rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 rounded">Send Message</button>
        </form>
        <button onClick={onClose} className="mt-3 text-red-600">Close</button>
      </div>
    </div>
  ) : null;
};

export default ContactFormModal;

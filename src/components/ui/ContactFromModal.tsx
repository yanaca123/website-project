import Image from "next/image";
// import { useState } from "react";

// import Select from "react-select";

// const countries = [
//   { value: "IN", label: "🇮🇳 India" },
//   { value: "US", label: "🇺🇸 United States" },
//   { value: "GB", label: "🇬🇧 United Kingdom" },
//   { value: "AU", label: "🇦🇺 Australia" },
// ];

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState("");

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     if (res.ok) {
  //       setSuccess(true);
  //       setFormData({ name: "", email: "", message: "" });
  //     } else {
  //       setError("Failed to send message. Please try again.");
  //     }
  //   } catch (err) {
  //     setError("Something went wrong.");
  //   }
  //   setLoading(false);
  // };

  if (!isOpen) return null;

  return (
    <>
      {/* <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

          {success ? (
            <p className="text-green-600">Message sent successfully!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="bg-black text-white py-2 rounded hover:bg-gray-800"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
          <button className="mt-4 text-gray-500" onClick={onClose}>
            Close
          </button>
        </div>
      </div> */}
     <div
  role="dialog"
  id="radix-:Rf4ja:"
  aria-describedby="radix-:Rf4jaH2:"
  aria-labelledby="radix-:Rf4jaH1:"
  data-state="open"
  className="fixed left-1/2 top-1/2 z-50 grid w-full max-w-xl lg:max-w-6xl translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 
    data-[state=open]:animate-in data-[state=closed]:animate-out 
    data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
    data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] 
    data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] 
    sm:rounded-lg bg-[#e9f1ef]"
>
  <div className="flex w-full flex-col lg:flex-row">
    {/* Image for larger screens */}
    <div className="hidden lg:block w-1/2">
      <Image
        alt="form image"
        loading="lazy"
        width={808}
        height={838}
        decoding="async"
        className="h-auto"
        src="/assets/contactForm.avif"
      />
    </div>


{/* Form Container */}
<div className="w-full lg:w-1/2 p-5 lg:p-10 bg-[#e9f1ef]">
  <div className="flex flex-col h-full justify-center gap-y-6">
    <h2 className="text-2xl lg:text-4xl font-semibold">Connect with us</h2>

    <form action="https://getform.io/f/bnlqyqxb" method="POST" className="flex flex-col gap-y-4">
      {/* Name & Company */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="w-full sm:w-1/2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your company name"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="w-full sm:w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Message */}
      <div className="w-full">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full h-[100%] p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your message"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="flex items-center hover:font-medium transition-all duration-300 w-[170px] group"
      >
        <Image
          alt="LogoButton"
          loading="lazy"
          width="48"
          height="48"
          decoding="async"
          src="https://www.scimplify.com/_next/static/media/Vectorlogobutton.ab86c173.svg"
        />
        <span className="-ml-7 flex items-center justify font-semibold">
          LET&apos;S START
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-right inline ml-1 group-hover:translate-x-2 transition-all duration-300"
          >
            <path d="M18 8L22 12L18 16"></path>
            <path d="M2 12H22"></path>
          </svg>
        </span>
      </button>
    </form>
  </div>
</div>


    {/* Close Button */}
    <button
      type="button"
      onClick={onClose}
      className="absolute right-[10%] top-[10%] rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      <Image
        alt="Close icon"
        loading="lazy"
        width="32"
        height="32"
        decoding="async"
        src="https://www.scimplify.com/_next/static/media/Group%20958CloseIcon.4de28f9d.svg"
      />
      <span className="sr-only">Close</span>
    </button>
  </div>
</div>

    </>
  );
};

export default ContactModal;

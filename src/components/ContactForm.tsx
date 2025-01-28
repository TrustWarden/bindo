import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const [sent, setSent] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log("Form Data: ", data);
    emailjs
      .send(
        "service_k458x6m", // Replace with your EmailJS service ID
        "template_4i785a9", // Replace with your EmailJS template ID
        data, // This object contains the form data (name, email, message)
        "xwQQVH_lvveC-GDVI" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          reset(); // Clear the form
        },
        (error) => {
          console.error("Failed to send email.", error);
          alert("Failed to send your message. Please try again.");
        }
      );
    setSent(
      "Thank you for reaching out to us. Your message has been successfully received, and we will get in touch with you using the information you provided."
    );
  };

  return (
    <div className="max-w-md lg:max-w-full lg:w-3/4 mx-auto bg-gray-100 p-6 rounded-3xl shadow-md mt-10 mb-16">
      <h2 className="text-2xl font-light text-gray-800 text-center mb-4">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div className="flex justify-between space-x-5">
          <div className="flex-1">
            <label
              htmlFor="name"
              className="block text-gray-700 font-light ml-2"
            >
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required." })}
              className={`w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-gray-700 font-light ml-2"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address.",
                },
              })}
              className={`w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your Email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-light ml-2"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required." })}
            className={`w-full px-3 py-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Your Message"
            rows={4}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-sky-500 text-white py-2 rounded-3xl hover:bg-sky-400 transition duration-200"
        >
          Send Message
        </button>

        {sent.length > 1 && (
          <div className="text-gray-400 font-light">{sent}</div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;

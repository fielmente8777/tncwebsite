"use client";
import { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  honeypot: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function CustomContactForm({ formType }) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const validate = (v) => {
    const errs = {};
    if (!v.firstName.trim()) errs.firstName = "First name is required.";
    if (!v.lastName.trim()) errs.lastName = "Last name is required.";
    if (!v.email.trim()) errs.email = "Email is required.";
    else if (!emailRegex.test(v.email)) errs.email = "Invalid email format.";
    if (!v.phone.trim()) errs.phone = "Phone is required.";
    else if (v.phone.replace(/\D/g, "").length !== 10)
      errs.phone = "Must be 10 digits.";
    if (v.honeypot) errs.honeypot = "Spam detected.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyFPGDLkw8XNIEeBiO6VsKOeuND9A7_7POTrng_--74BeRoiopjLHXcvLrn2pOLpARYXQ/exec"; // put your Web App URL in .env

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.honeypot && values.honeypot.trim() !== "") {
      console.warn("Spam detected via honeypot. Submission blocked.");
      setStatus("❌ Submission blocked as spam.");
      return;
    }
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    try {
      setSubmitting(true);
      setStatus("");

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          message: values.message,
          sheetName: formType,
        }),
      });

      const data = await res.json();
      if (data.status === "success") {
        setStatus("✅ Form submitted successfully!");
        setValues(initialState);
      } else {
        setStatus("❌ Submission error: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      setStatus("❌ Failed to submit. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="formContainer">
      <form
        id="customForm"
        onSubmit={handleSubmit}
        className="card p-4 shadow-sm form-max w-full"
        style={{ maxWidth: "755px" }}
      >
        {/* Name */}
        <div className="grid md:grid-cols-8 grid-cols-1 gap-6 items-center py-3">
          <label className="md:col-span-2 col-form-label fw-medium fs-5 text-start">
            Your Name
          </label>
          <div className="md:col-span-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className={`w-full p-4 ${errors.firstName ? "is-invalid" : ""}`}
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className="text-red-500">{errors.firstName}</div>
            )}
          </div>
          <div className="md:col-span-3">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className={`w-full p-4 ${errors.lastName ? "is-invalid" : ""}`}
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className="text-red-500">{errors.lastName}</div>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="grid md:grid-cols-8 gap-6 items-center py-3">
          <label className="col-span-2 col-form-label fw-medium fs-5 text-start">
            Your Email
          </label>
          <div className="col-span-6">
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              className={`w-full p-4 ${errors.email ? "is-invalid" : ""}`}
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="grid md:grid-cols-8 gap-6 items-center py-3">
          <label className="col-span-2 col-form-label fw-medium fs-5 text-start">
            Your Phone
          </label>
          <div className="col-span-6">
            <input
              type="tel"
              name="phone"
              placeholder="(000) 000-0000"
              className={`w-full p-4 ${errors.phone ? "is-invalid" : ""}`}
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <div className="text-red-500">{errors.phone}</div>
            )}
          </div>
        </div>

        {/* Message (Optional) */}
        <div className="grid md:grid-cols-8 gap-6 items-center py-3">
          <label className="col-span-2 col-form-label fw-medium fs-5 text-start">
            Your Message
          </label>
          <div className="col-span-6">
            <textarea
              name="message"
              className="w-full p-4 resize-none"
              rows="2"
              // placeholder="Optional message"
              value={values.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        {/* Honeypot */}
        <div style={{ display: "none" }}>
          <input
            type="text"
            name="honeypot"
            value={values.honeypot}
            onChange={handleChange}
            placeholder="Should be Empty"
          />
        </div>

        {/* Submit */}
        <div className="row">
          <div className="col-sm-12">
            <button
              type="submit"
              className="bg-primary  px-12 py-2 text-white rounded-md text-lg"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>

        {status && (
          <div className="alert alert-info mt-3 text-center">{status}</div>
        )}
      </form>
    </div>
  );
}

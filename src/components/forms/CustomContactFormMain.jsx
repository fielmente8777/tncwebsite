"use client"
import React, { useState } from "react";

const applicationOptions = [
  "Visitor visa",
  "Spousal Sponsorship",
  "Work permit",
  "Spousal Open Work Permit",
  "Study permit",
  "Intra Company Transfer Work Permit",
  "Permanent residence (Express Entry or PNP)",
  "Other Please Mention",
];

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "", 
  residenceCountry: "",
  citizenshipCountry: "",
  additionalComments: "", 
  applicationTypes: [], 
  honeypot: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

// REUSE your Apps Script endpoint
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyFPGDLkw8XNIEeBiO6VsKOeuND9A7_7POTrng_--74BeRoiopjLHXcvLrn2pOLpARYXQ/exec";

export default function CustomContactFormMain({ formType }) {
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
    const { name, value, type, checked } = e.target;

    // Handle checkbox group for applicationTypes
    if (name === "applicationTypes") {
      setValues((prev) => {
        const exists = prev.applicationTypes.includes(value);
        const next = exists
          ? prev.applicationTypes.filter((v) => v !== value)
          : prev.applicationTypes.concat(value);
        return { ...prev, applicationTypes: next };
      });
      return;
    }

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend honeypot guard
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

      const payload = {
        timestamp: new Date().toISOString(),
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        residenceCountry: values.residenceCountry,
        citizenshipCountry: values.citizenshipCountry,
        additionalComments: values.additionalComments || "",
        applicationTypes: values.applicationTypes.join(", "), // array
        sheetName: formType, // set a different sheet/tab for this form
      };

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
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
    <div
      id="formContainer"
    >
      <form
        id="customForm"
        onSubmit={handleSubmit}
        className="card p-4 shadow-sm w-full"
        style={{ maxWidth: 750 }}
      >
        {/* Name Row */}
        <div className="grid md:grid-cols-8 grid-cols-1 gap-6 items-center py-3">
          <label className="md:col-span-2 col-form-label text-start form-label-lg">
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
        <div className="grid md:grid-cols-8 grid-cols-1 gap-6 items-center py-3">
          <label className="col-span-2 col-form-label text-start form-label-lg">
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
        <div className="grid md:grid-cols-8 grid-cols-1 gap-6 items-center py-3">
          <label className="md:col-span-2 col-form-label text-start form-label-lg">
            Your Phone
          </label>
          <div className="md:col-span-6">
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

        {/* Message (optional) */}
        {/* <div className="grid md:grid-cols-8 grid-cols-1 gap-6 items-center py-3">
          <label className="col-sm-4 col-form-label text-start form-label-lg">
            Your Message
          </label>
          <div className="col-sm-8">
            <textarea
              name="message"
              rows="4"
              className="w-full p-4"
              placeholder="Optional"
              value={values.message}
              onChange={handleChange}
            />
          </div>
        </div> */}

        {/* Country of Residence */}
        <div className="grid md:grid-cols-8 grid-cols-1 gap-6 items-center py-3">
          <label className="md:col-span-2 text-nowrap">
            {formType == "TNC Inside Main"
              ? "Current Address"
              : "Country of Residence"}
          </label>
          <div className="md:col-span-6">
            <input
              type="text"
              name="residenceCountry"
              className="w-full p-4"
              value={values.residenceCountry}
              onChange={handleChange}
            />
            {errors.residenceCountry && (
              <div className="text-red-500">{errors.residenceCountry}</div>
            )}
          </div>
        </div>

        {/* Country of Citizenship */}
        <div className="grid md:grid-cols-8 grid-cols-1 gap-6 items-center py-3">
          <label className="md:col-span-2 text-nowrap">
            Country of Citizenship
          </label>
          <div className="md:col-span-6">
            <input
              type="text"
              name="citizenshipCountry"
              className="w-full p-4"
              value={values.citizenshipCountry}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Additional Comments (optional) */}
        <div className="grid md:grid-cols-8 grid-cols-1 gap-6 items-center py-3">
          <label className="md:col-span-2 text-nowrap">
            Additional Comments
          </label>
          <div className="md:col-span-6">
            <input
              type="text"
              name="additionalComments"
              className="w-full p-4"
              value={values.additionalComments}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Application Types (multi-select) */}
        <div className="grid md:grid-cols-8 grid-cols-1 gap-6 py-3">
          <label className="md:col-span-2 col-form-label text-start form-label-lg">
            What type of application do you wish to apply? Please Choose.
          </label>
          <div className="md:col-span-6">
            {applicationOptions.map((opt) => (
              <div className="flex items-center gap-4 mb-2" key={opt}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`app-${opt} tnc_checkbox`}
                  name="applicationTypes"
                  value={opt}
                  checked={values.applicationTypes.includes(opt)}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={`app-${opt}`}>
                  {opt}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Honeypot (hidden) */}
        <div style={{ display: "none" }}>
          <input
            type="text"
            name="honeypot"
            value={values.honeypot}
            onChange={handleChange}
            placeholder="Do not fill"
            autoComplete="off"
            tabIndex={-1}
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

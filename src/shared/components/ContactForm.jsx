"use client";

import { useState, useEffect } from "react";

import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "./ui/Button";
import TextInput from "./ui/input/TextInput";
import TextareaInput from "./ui/input/TextareaInput";

import { contactSchema } from "@/lib/schemas/contact-schema";
import { serviceCategories } from "../data";

export default function ContactForm() {
  const [activeServices, setActiveServices] = useState([serviceCategories[0]]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    setValue("serviceCategories", activeServices, { shouldValidate: true });
  }, [activeServices, setValue]);

  function handleServiceSelect(category) {
    if (activeServices.includes(category)) {
      setActiveServices((prev) => prev.filter((item) => item !== category));
    } else {
      setActiveServices((prev) => [...prev, category]);
    }
  }

  function handleFormSubmit(data) {
    console.log("Form submitted:", data);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-12 flex flex-col gap-4 px-4 md:px-8">
        <TextInput
          label="Full name"
          {...register("fullname", { required: true, maxLength: 80 })}
        />
        {errors.fullname && (
          <span className="text-c2 text-red-400">
            {errors.fullname?.message}
          </span>
        )}
        <TextInput
          label="Enter your email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-c2 text-red-400">{errors.email?.message}</span>
        )}
        <TextInput
          label="Company name"
          {...register("companyName", { required: true, maxLength: 80 })}
        />
        {errors.companyName && (
          <span className="text-c2 text-red-400">
            {errors.companyName?.message}
          </span>
        )}
        <div className="flex flex-col gap-3">
          <label className="text-c2 font-bold text-neutral-500">
            <span className="text-neutral-300">How can we help you?</span>{" "}
            (select all that applies)
          </label>
          <ul className="flex flex-wrap gap-3">
            {serviceCategories.map((serviceCategory) => (
              <li key={serviceCategory}>
                <Button
                  variant="secondary"
                  type="button"
                  className={twMerge(
                    activeServices.includes(serviceCategory) &&
                      "bg-neutral-800",
                  )}
                  onClick={() => handleServiceSelect(serviceCategory)}
                >
                  {serviceCategory}
                </Button>
              </li>
            ))}
          </ul>
          {errors.serviceCategories && (
            <span className="text-c2 text-red-400">
              {errors.serviceCategories?.message}
            </span>
          )}
        </div>
        <TextareaInput
          label="Any extra details that you would like to share?"
          {...register("extraDetails")}
        />
      </div>
      <div className="w-full bg-black px-4 py-6 md:px-8">
        <Button
          className="w-full"
          type="submit"
          disabled={isSubmitting}
          onClick={handleSubmit(handleFormSubmit)}
        >
          {isSubmitting ? "Submitting..." : "Submit Form"}
        </Button>
      </div>
    </form>
  );
}

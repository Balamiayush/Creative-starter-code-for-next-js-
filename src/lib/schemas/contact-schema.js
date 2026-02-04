import { z } from "zod";

import { serviceCategories } from "@/shared/data";

export const contactSchema = z.object({
  fullname: z
    .string()
    .min(1, "Full name is required")
    .max(100, "Full name must be at most 100 characters"),
  email: z.email("Invalid email address").min(1, "Email is required"),
  companyName: z
    .string()
    .min(1, "Company name is required")
    .max(100, "Company name must be at most 100 characters"),
  serviceCategories: z
    .array(z.enum(serviceCategories))
    .min(1, "Select at least one service category"),
});

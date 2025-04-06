import { z } from "zod";

const arabicEnglishRegex = /^[\u0600-\u06FFa-zA-Z\s]+$/;

export const formSchema = z.object({
    email: z.string().email("البريد الإلكتروني غير صحيح"),

    age: z.coerce.number().min(18, "يجب أن يكون العمر 18 عامًا على الأقل"),

    whatsapp: z
        .string()
        .regex(
            /^(\+?\d{1,3})?\d{9,12}$/,
            "رقم واتساب غير صحيح، تأكد من إدخال رقم صحيح"
        ),

    career: z
        .string()
        .min(2, "المسمى الوظيفي يجب أن يكون من حرفين على الأقل")
        .max(30, "المسمى الوظيفي طويل جدًا")
        .regex(
            arabicEnglishRegex,
            "المسمى الوظيفي يجب أن يحتوي على حروف عربية أو إنجليزية فقط"
        ),
});

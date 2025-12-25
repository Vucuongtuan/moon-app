import { z } from 'zod';
import { i18n } from '../i18n';

// Helper function để lấy translation
const t = (key: string) => i18n.t(`auth.validation.${key}`);

// Schema cho Login
export const loginSchema = z.object({
    email: z
        .string()
        .min(1, t('emailRequired'))
        .email(t('emailInvalid')),
    password: z
        .string()
        .min(1, t('passwordRequired'))
        .min(3, t('passwordMinLength')),
});

// Schema cho Register
export const registerSchema = z
    .object({
        fullName: z
            .string()
            .min(1, t('fullNameRequired'))
            .min(2, t('fullNameMinLength')),
        email: z
            .string()
            .min(1, t('emailRequired'))
            .email(t('emailInvalid')),
        password: z
            .string()
            .min(1, t('passwordRequired'))
            .min(3, t('passwordMinLength'))
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                t('passwordStrength')
            ),
        confirmPassword: z
            .string()
            .min(1, t('confirmPasswordRequired')),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: t('confirmPasswordMatch'),
        path: ['confirmPassword'],
    });

// Types
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;

import { z } from 'zod';

// Schema cho Edit Profile
export const editProfileSchema = z.object({
    name: z
        .string()
        .min(1, 'Name is required')
        .min(2, 'Name must be at least 2 characters'),
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email address'),
    phone: z
        .string()
        .optional()
        .refine(
            (val) => !val || /^[0-9+\-\s()]*$/.test(val),
            'Invalid phone number format'
        ),
    bio: z
        .string()
        .max(500, 'Bio must be less than 500 characters')
        .optional(),
});

// Type
export type EditProfileFormData = z.infer<typeof editProfileSchema>;

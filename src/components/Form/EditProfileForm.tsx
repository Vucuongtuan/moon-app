import useAuth from '@/src/stores/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { EditProfileFormData, editProfileSchema } from '../../schemas/profile.schema';
import { Button, ControlledInput } from '../ui';
import { Text } from '../ui/Text';
import { styles } from './EditProfileForm.styles';

export default function EditProfileForm() {
    const router = useRouter();
    const { user } = useAuth();

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty },
    } = useForm<EditProfileFormData>({
        resolver: zodResolver(editProfileSchema),
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
            phone: '',
            bio: '',
        },
    });

    const onSubmit = async (data: EditProfileFormData) => {
        try {
            console.log('Update profile data:', data);
            // TODO: Call API to update profile
            // await updateProfile(data);
            
            // Show success message
            alert('Profile updated successfully!');
            router.back();
        } catch (error) {
            console.error('Update profile error:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
            {/* Name Input */}
            <ControlledInput
                control={control}
                name="name"
                label="Full Name"
                placeholder="Enter your full name"
                autoCapitalize="words"
                autoComplete="name"
                textContentType="name"
            />

            {/* Email Input */}
            <ControlledInput
                control={control}
                name="email"
                label="Email"
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
            />

            {/* Phone Input */}
            <ControlledInput
                control={control}
                name="phone"
                label="Phone Number (Optional)"
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                autoComplete="tel"
                textContentType="telephoneNumber"
            />

            {/* Bio Input */}
            <ControlledInput
                control={control}
                name="bio"
                label="Bio (Optional)"
                placeholder="Tell us about yourself"
                multiline
                numberOfLines={4}
                maxLength={500}
                style={styles.bioInput}
            />

            {/* Save Button */}
            <View style={styles.buttonContainer}>
                <Button
                    onPress={handleSubmit(onSubmit)}
                    disabled={isSubmitting || !isDirty}
                    style={styles.saveButton}
                >
                    <Text style={styles.saveButtonText}>
                        {isSubmitting ? 'Saving...' : 'Save Changes'}
                    </Text>
                </Button>

                {/* Cancel Button */}
                <Button
                    variant="outline"
                    onPress={() => router.back()}
                    disabled={isSubmitting}
                    style={styles.cancelButton}
                >
                    <Text style={styles.cancelButtonText}>
                        Cancel
                    </Text>
                </Button>
            </View>
        </ScrollView>
    );
}

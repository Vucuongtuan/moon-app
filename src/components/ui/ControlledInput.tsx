import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Input, InputProps } from './Input';

type ControlledInputProps<T extends FieldValues> = Omit<InputProps, 'value' | 'onChangeText'> & {
    control: Control<T>;
    name: Path<T>;
    type?: 'text' | 'password';
};

export function ControlledInput<T extends FieldValues>({
    control,
    name,
    type = 'text',
    ...inputProps
}: ControlledInputProps<T>) {

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <Input
                    {...inputProps}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    type={type}
                />
            )}
        />
    );
}

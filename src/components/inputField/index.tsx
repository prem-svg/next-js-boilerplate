'use client';
import { Input } from '@heroui/react';
import { cn } from '@heroui/theme';
import React from 'react';
import type { ChangeEventHandler, ReactNode } from 'react';

interface InputFieldProps {
	id?: string;
	className?: string;
	onKeyDown?: (e: React.KeyboardEvent) => void; // Handler for key press events
	customErrorStyle?: string;
	customPlaceholderStyle?: string;
	type?: string; //Type of the input
	value?: string;
	label?: string | React.ReactNode;

	inputOnChange?: ChangeEventHandler<HTMLInputElement> | undefined; // Handler for input value changes
	onKeyClickEnter?: (e: React.KeyboardEvent) => void; // Handler for key press events
	onClear?: () => void; // Handler for clear icon events
	onBlur?: () => void;
	onFocus?: () => void;
	error?: boolean; // Indicates if there's an error in the input
	placeholder?: string; // Placeholder for input fields
	errorMessage?: string; // Error message to display
	disabled?: boolean; // Disables the input
	isReadOnly?: boolean; // Makes the input read-only
	startContent?: ReactNode; // Content at the start of the input
	endContent?: ReactNode; // Content at the end of the input
	isRequired?: boolean; // Marks the input as required
	customHeight?: string; // Custom height for the input
	customLabelStyle?: string; // Custom styles for the label
	customInputValueStyle?: string; // Custom input value styles
	variant?: 'flat' | 'bordered' | 'underlined' | 'faded'; // Styling variant
	labelPlacement?: 'outside' | 'outside-left' | 'inside'; // Placement of the label
	mainWrapperClassName?: string;
	inputDefaultValue?: string;
	paddingStyle?: string; // Placement of the label
	isInvalid?: boolean;
	isClearable?: boolean;
	showLabelIcon?: boolean;
	tooltipContent?: string;
	customBackgroundColor?: string;
	inputWrapperClassName?: string;
	parentClassName?: string;
	errorId?: string
}

export const InputField = ({
	id,
	className = 'w-full',
	customPlaceholderStyle = 'font-source font-regular text-[1rem] font-normal !text-content2-500 placeholder:text-body2',
	customErrorStyle = 'font-source text-body1 text-danger-200 font-normal mt-1 ml-1',
	type,
	value,
	onKeyClickEnter,
	placeholder = '',
	inputOnChange = () => false,
	startContent,
	endContent,
	error = false,
	disabled = false,
	isRequired = false,
	errorMessage = '',
	label = '',
	customHeight = 'h-[48px]',
	labelPlacement = 'inside',
	customLabelStyle = '',
	variant = 'bordered',
	customBackgroundColor,
	customInputValueStyle = 'font-source text-h3 text-content2-700',
	inputWrapperClassName,
	mainWrapperClassName = `${!disabled && 'bg-background'}`,
	inputDefaultValue,
	paddingStyle,
	showLabelIcon = false,
	onBlur = () => undefined,
	onFocus = () => undefined,
	parentClassName = '',
	errorId
}: InputFieldProps) => {
	const [isFocused, setIsFocused] = React.useState(false);
	return (
		<div className={cn('w-full', parentClassName)}>
			{/* Input field */}
			{label && (
				<label
					htmlFor={id}
					aria-label='A label'
					className={`inline-block font-source text-body3 font-regular text-content2-600 ${customLabelStyle} flex flex-row items-center gap-1`}
				>
					<div
						className={cn('flex items-center mb-[6px]',
							showLabelIcon ? 'gap-2' : 'gap-1',
							'font-source font-body3 font-regular text-content2'
						)}
					>
						{label} {isRequired && <span className='text-danger-100'>*</span>}
					
					</div>
				</label>
			)}
			<Input
				value={value}
				defaultValue={inputDefaultValue}
				type={type}
				onChange={inputOnChange}
				labelPlacement={labelPlacement}
				placeholder={placeholder}
				isRequired={isRequired}
				startContent={startContent}
				endContent={endContent}
				variant={variant}
				isDisabled={disabled}
				className={`${className}`}
				classNames={{
					base: 'h-[full] border-none',
					mainWrapper: cn(
						'bg-background',
						customBackgroundColor,
						mainWrapperClassName,
					),
					label: `text-body2 font-source font-regular text-content2-600`,
					input: [
						cn(error ?
							'placeholder:!text-danger-200 placeholder:!font-regular'
							: customPlaceholderStyle),
						`${customInputValueStyle}`,
						`${!disabled && 'bg-background'}`,

					],
					inputWrapper: cn(
						'border border-content2-200 data-[hover=true]:border-content2-200',
						'outline-none rounded-[0.5rem]',
						customHeight,
						'shadow-none',
						`${paddingStyle}`,
						`${disabled && 'bg-content2-100'}`,
						`${!disabled && 'bg-background'}`,
						inputWrapperClassName,
						error
							? '!border-danger-200 data-[hover=true]:!border-danger-200 group-data-[focus=true]:!border-danger-200'
							: isFocused
								? '!border-primary-100 data-[hover=true]:!border-primary-500 group-data-[focus=true]:!border-primary-500'
								: '',
					),
				}}
				onFocus={() => {
					setIsFocused(true);
					onFocus();
				}}
				onBlur={() => {
					setIsFocused(false);
					onBlur();
				}}
				onKeyDown={onKeyClickEnter}
				id={id}
			/>
			{/* Error message */}
			{error && errorMessage && (
				<p id={errorId} className={`${customErrorStyle}`}>{errorMessage}</p>
			)}
		</div>
	);
};

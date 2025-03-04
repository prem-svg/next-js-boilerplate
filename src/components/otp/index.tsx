/* eslint-disable @typescript-eslint/no-unused-expressions */
// import { InputOtp } from '@nextui-org/input-otp';

// interface OtpFormProps {
// 	errorMessageId?: string;

// 	id?: string;
// 	// The length of the OTP input
// 	length?: number;

// 	// The value entered in the OTP input
// 	value: string;

// 	// Error message to be displayed if there's an error
// 	errorMessage?: React.ReactNode;

// 	// Whether the input is disabled or not
// 	isDisabled?: boolean;

// 	// Whether the input is required
// 	isRequired?: boolean;

// 	// Whether the input is invalid or not
// 	isInvalid?: boolean;

// 	// The size of the input field ('sm', 'md', or 'lg')
// 	size?: 'sm' | 'md' | 'lg';

// 	// The border-radius of the input field ('sm', 'md', or 'lg')
// 	radius?: 'sm' | 'md' | 'lg';

// 	// Callback function to handle value changes
// 	onValueChange: (val: string) => void;

// 	// Optional custom styles to be applied to the OTP segments
// 	segmentStyle?: string[];
// }

// const style = {
// 	segment: [
// 		'relative',
// 		// 'md-w-[5.5rem]',
// 		// 'md-h-[3.125rem]',
// 		'h-[2.5rem]',
// 		'w-[3rem]',
// 		'border-1' /* Remove the border */,
// 		'data-[active=true]:border' /* Remove the border when active */,
// 		'data-[active=true]:border-foreground-600' /* Remove the border when active */,
// 		'data-[active=true]:z-2',
// 		'data-[active=true]:ring-0' /* Remove the ring when active */,
// 		'data-[active=true]:ring-offset-0' /* Remove the ring offset */,
// 		'data-[active=true]:ring-offset-background',
// 		'data-[active=true]:ring-foreground',
// 		'data-[active=true]:text-body1',
// 		'data-[active=true]:text-foreground',
// 		'data-[active=true]:font-medium',
// 		'data-[has-value=true]:text-body1',
// 		'data-[has-value=true]:text-foreground',
// 		'data-[has-value=true]:font-medium',
// 		'focus:outline-none' /* Remove the outline on focus */,
// 		'focus:ring-0' /* Remove the ring on focus */,
// 		'focus:border-0' /* Remove the border on focus */,
// 		'md:w-[2.5rem]',
// 		'md:h-[2.125rem]',
// 		'lg:w-[5.5rem]',
// 		'lg:h-[3.125rem]',
// 	],
// };
// export const OtpForm = (props: OtpFormProps) => {
// 	const {
// 		errorMessageId,
// 		id,
// 		length = 4,
// 		value,
// 		onValueChange,
// 		isDisabled,
// 		isRequired,
// 		radius = 'md',
// 		size = 'lg',
// 		isInvalid = false,
// 		errorMessage = <p id={errorMessageId}>Invalid OTP code</p>,
// 		segmentStyle = style.segment,
// 	} = props;

// 	return (
// 		<InputOtp
// 			id={id}
// 			variant='bordered'
// 			size={size}
// 			radius={radius}
// 			isRequired={isRequired}
// 			isInvalid={isInvalid}
// 			errorMessage={errorMessage}
// 			length={length}
// 			value={value}
// 			isDisabled={isDisabled}
// 			defaultValue={value}
// 			onValueChange={onValueChange}
// 			disableAnimation={false}
// 			autoFocus={true}
// 			classNames={{
// 				base: 'w-full items-center outline-none',
// 				segmentWrapper: 'gap-x-[1rem]',
// 				segment: [...segmentStyle],
// 			}}
// 		/>
// 	);
// };

import React, { useEffect, useState } from "react";

type OTPInputProps = {
  length?: number;
  onChange?: (otp?: string) => void;
  otpId?: string;
  value?: string;
  errorMessageId?: string;
  radius?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  isDisabled?: boolean;
};

export const OtpForm: React.FC<OTPInputProps> = ({
  length = 4,
  onChange,
  otpId,
  value = "",
  errorMessageId,
  radius = "8px",
  isRequired = false,
  isInvalid = false,
  isDisabled = false,
  errorMessage = "Invalid OTP",
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  useEffect(() => {
    if (value) {
      const otpArray = value.split("").slice(0, length); // Take only up to `length` digits
      setOtp([...otpArray, ...new Array(length - otpArray.length).fill("")]);
    }
  }, [value, length]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1);
    setOtp(updatedOtp);
    onChange && onChange(updatedOtp.join(""));

    if (value && index < length - 1) {
      const nextInput = document.getElementById(
        `${otpId}-${index + 1}`
      ) as HTMLInputElement;
      nextInput && nextInput.focus();
    }
  };

  const handleKeyUp = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0) {
      const prevInput = document.getElementById(
        `${otpId}-${index - 1}`
      ) as HTMLInputElement;
      prevInput && prevInput.focus();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div style={{ display: "flex", gap: "8px" }} aria-required={isRequired}>
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`${otpId}-${index}`}
            type="text"
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyUp={(e) => handleKeyUp(e, index)}
            className={`font-source w-[3rem] h-[3rem] text-body3  text-center !text-content2-700 border rounded-md focus:outline-none focus:ring-2 font-regular 
			${
        isInvalid
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-blue-500"
      }
			${isDisabled ? "bg-gray-200 cursor-not-allowed" : ""}`}
            style={{
              borderRadius: radius,
            }}
            required={isRequired}
            disabled={isDisabled}
          />
        ))}
      </div>
      {isInvalid && (
        <p className="footnote-1 text-danger-500 mt-1" id={errorMessageId}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

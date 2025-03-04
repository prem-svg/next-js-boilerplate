import React from "react";
import { ButtonComponent, OtpForm } from "../index";
import { useTranslations } from "next-intl";

interface LoginProps {
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (k: string, v: string) => void;
  loading?: boolean;
  passwordHash?: string;
  emailId?: string;
  passwordError?: string;
  emailError?: string;
}
export const OtpSection = (props: LoginProps) => {
  const {
    className,
    onSubmit,
    handleChange,
    loading = false,
    emailId,
    emailError,
  } = props;
  const t = useTranslations();

  return (
    // Main container with background image
    <form onSubmit={onSubmit} className={className}>
      {/* Main content wrapper with scrollable height */}
      <div className="text-center  py-4 px-10">
        {/* Header section with welcome messages */}
        {/* Header section with welcome messages */}
        <p className="pb-[1rem] font-source text-h3 text-content2-700 font-bold leading-8">
          {t("Enter OTP")}
        </p>
        <p className="pb-[2rem] font-source text-body2 text-content2 font-regular leading-6">
          {t("Please enter the one time password (OTP)")} 
          <br/>
          {t("that has been sent to")} +91-7810039215
        </p>

        {/* Email input field */}
        <div className="mt-[0.75rem]">
          <OtpForm
            errorMessage={emailError}
            length={4}
            otpId="auth-otp-input"
            errorMessageId="auth-otp-error-message"
            value={emailId}
            onChange={(value) => handleChange("otpv", value??'')}
          />
        </div>

        {/* Sign in button */}
        <div className="mt-[3rem]">
          <ButtonComponent
            isIcon={false}
            buttonText={loading ? `${t("Signing in")}...` : t("Proceed")}
            baseClassName="bg-primary w-full h-[4rem]"
            textClassName="text-background !text-h6"
            bgColor="bg-primary"
            // handleOnClick={onSubmit}
            type="submit"
          />
        </div>

        <p className="pt-[1rem] font-source text-body3 text-content2 font-regular leading-6">
          {t("By continuing you accpet our")} <b>{t("T&C")}</b> {("and")} <b>{t("Privacy Policy")}</b>
        </p>
      </div>
    </form>
  );
};

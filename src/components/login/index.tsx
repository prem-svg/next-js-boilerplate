import React from "react";
import { InputField } from "../inputField";
import { ButtonComponent } from "../index";
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

export const LoginComponent = (props: LoginProps) => {
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
      <div className="text-center p-4">
        {/* Header section with welcome messages */}
        <p className="pb-[1rem] font-source text-h3 text-content2-700 font-bold leading-8">
          {t("Signup to place order")}
        </p>
        <p className="pb-[2rem] font-source text-body2 text-content2 font-regular leading-6">
          {t("To proceed, please verify your contact details")}
        </p>

        {/* Divider with text */}
        <div className="mt-[1.75rem] flex items-center justify-between gap">
          <div className="w-[5.3rem] h-[1px] bg-content2-200" />
          <p className="font-source !font-regular text-body2">
            &nbsp;&nbsp;{t("with Mobile Number")}&nbsp;&nbsp;
          </p>
          <div className="w-[5.3rem] h-[1px] bg-content2-200" />
        </div>

        {/* Email input field */}
        <div className="mt-[1.75rem]">
          <InputField
            key="input-component-mail"
            value={emailId}
            type="number"
            inputOnChange={(e) => handleChange("emailId", e?.target?.value)}
            errorMessage={emailError}
            placeholder={t("Enter Mobile Number")}
            labelPlacement="outside"
            customHeight="h-[4.188rem]"
            isRequired={false}
            disabled={false}
            isClearable={true}
            label={t("Mobile Number")}
            error={emailError ? true : false}
            id="mobile"
            startContent={
              <div className="border-r-1 px-4 mr-2">
                <p className="font-source text-secondary-200 font-medium text-[0.875rem] h-4 text-body1">
                  +91
                </p>
              </div>
            }
          />
        </div>

        {/* Sign in button */}
        <div className="mt-[3rem]">
          <ButtonComponent
            isIcon={false}
            buttonText={loading ? "Signing in..." : "Sign In"}
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

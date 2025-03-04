"use client";
import { AuthContainer, LoginComponent, OtpSection } from "@/components";
import React from "react";
// import { useTranslations } from "next-intl";

export default function Home() {
  // const t = useTranslations();
  const [otpSended, setOtpSended] = React.useState(false);

  return (
    <div>
      <AuthContainer>
        {!otpSended && (
          <LoginComponent
            onSubmit={() => setOtpSended(true)}
            handleChange={() => console.log("entering")}
          />
        )}
        {otpSended && (
          <OtpSection handleChange={() => console.log("entering")} />
        )}
      </AuthContainer>
    </div>
  );
}

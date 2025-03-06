"use client";
import { AuthContainer, LoginComponent, OtpSection } from "@/components";
import { useRouter } from "next/navigation";
import React from "react";
// import { useTranslations } from "next-intl";

export default function Home() {
  // const t = useTranslations();
  const route = useRouter();
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
          <OtpSection
            onSubmit={() => route?.push("/home")}
            handleChange={() => console.log("entering")}
          />
        )}
      </AuthContainer>
    </div>
  );
}

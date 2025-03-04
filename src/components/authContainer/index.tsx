/* eslint-disable @next/next/no-img-element */
import { cn, Image } from "@heroui/react";

/**
 * Props interface for the AuthContainer component
 * @interface AuthContainerProps
 * @property {React.ReactNode} children - Child components to be rendered inside the container
 * @property {string} [className] - Optional CSS classes to be applied to the container
 */
interface AuthContainerProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

/**
 * AuthContainer - A reusable authentication container component
 *
 * This component creates a layout for authentication pages with the following features:
 * - Full-width background with custom image
 * - Centered content area with shadow and rounded corners
 * - Two-column layout with banner image and content area
 * - Responsive grid system using grid-cols-12
 * - Custom header with logo, divider, and type indicator chip
 *
 * @component
 * @param {AuthContainerProps} props - Component props
 * @returns {JSX.Element} The rendered authentication container
 */
export const AuthContainer = (props: AuthContainerProps) => {
  const { children, className } = props;
  return (
    // Main container with background image
    <div
      className={cn(
        "flex h-screen bg-cover bg-center bg-no-repeat justify-center items-center",
        className
      )}
    >
      {/* Content wrapper with shadow and rounded corners */}
      <div className="bg-background rounded-[0.75rem] shadow-layout-shadow w-full">
        {/* Main content section with two columns */}
        <div className="grid grid-cols-12 h-full">
          {/* Left column with banner image */}
          <div className="hidden md:block md:col-span-6 w-full h-full">
            <img
              alt="banner"
              src={
                "https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/5024772.jpg?alt=media&token=cdc1d6b6-a045-4d79-a449-b63e60f426c6"
              }
              className="h-screen w-full"
            />
          </div>
          {/* Right column with centered content */}
          <div className="md:col-span-6 p-8 col-span-12 h-screen relative">
            <div className="absolute top-8 left-8">
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/Your%20paragraph%20text.png?alt=media&token=c11b6c61-6a07-4d96-9663-d0e4c01e805d"
                }
                alt="Revature"
                className="w-[180px] h-[38px] mb-6"
              />
            </div>
            <div className="flex col-span-12 justify-center items-center h-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RightArrowSvgIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { width = 9, height = 16, className, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 9 16"
      role="presentation"
      className={className}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M8 8.006c0 .16-.058.313-.161.425l-5.919 6.4a.5.5 0 0 1-.757-.01.64.64 0 0 1 .01-.839l5.526-5.976L1.16 2.018a.64.64 0 0 1-.009-.839.5.5 0 0 1 .757-.01l5.93 6.412A.63.63 0 0 1 8 8.006Z"
        stroke="currentColor"
      />
    </svg>
  );
};

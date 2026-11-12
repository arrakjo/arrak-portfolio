import { FilePdfIcon } from "@phosphor-icons/react/dist/csr/FilePdf";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/csr/LinkedinLogo";
import { LINKEDIN_URL, RESUME_PDF_URL } from "./utils/resume.utils";

const VARIANTS: Record<ResumeButtonVariant, string> = {
  dark: "px-4 py-3 md:text-base hover:bg-[#111] bg-[#17191a] text-[#FFFAEA]",
  light: "px-4 py-2 hover:bg-white bg-[#FFFAEA] text-[#17191a]",
};

type ResumeButtonVariant = "dark" | "light";

type ResumeButtonProps = {
  variant?: ResumeButtonVariant;
  className?: string;
};

export default function ResumeButton({
  variant = "dark",
  className = "",
}: ResumeButtonProps) {
  const hasPdf = Boolean(RESUME_PDF_URL);
  const Icon = hasPdf ? FilePdfIcon : LinkedinLogoIcon;
  const linkProps = RESUME_PDF_URL
    ? { href: RESUME_PDF_URL, download: true }
    : { href: LINKEDIN_URL, target: "_blank", rel: "noopener noreferrer" };

  return (
    <a
      {...linkProps}
      className={`w-fit flex justify-center items-center text-sm font-light uppercase duration-150 ${VARIANTS[variant]} ${className}`}
      aria-label={hasPdf ? "Download resume (PDF)" : "View resume on LinkedIn"}
    >
      <span className="mr-2">
        <Icon size={24} />
      </span>
      {hasPdf ? "Download Resume" : "Full Resume"}
    </a>
  );
}

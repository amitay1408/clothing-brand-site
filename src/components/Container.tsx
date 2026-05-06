import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

/**
 * Single source of truth for page-width containment.
 * Max 1280px, horizontally centered, consistent gutters.
 */
export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        maxWidth: "1280px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "clamp(1.25rem, 4vw, 2.5rem)",
        paddingRight: "clamp(1.25rem, 4vw, 2.5rem)",
      }}
    >
      {children}
    </div>
  );
}

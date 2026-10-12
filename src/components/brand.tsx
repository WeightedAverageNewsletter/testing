import { Link } from "@tanstack/react-router";

// Logo is served from /public so it works on any host (the old Lovable-only asset link broke on Vercel).
export const logoUrl = "/favicon.png";

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Weighted Average home">
      <img
        src={logoUrl}
        width={400}
        height={400}
        className="brand-icon"
        alt=""
      />
      <span>
        Weighted Average<span className="text-primary">.</span>
      </span>
    </Link>
  );
}

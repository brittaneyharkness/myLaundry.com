"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const state = searchParams.get("state");
  const city = searchParams.get("city");

  const pathSegments = pathname.split("/").filter(Boolean); // Remove empty segments

  return (
    <nav aria-label="breadcrumb" className="text-gray-600 text-sm">
      <ol className="flex space-x-2">
        {/* Home Link */}
        <li>
          <Link href="/" className="text-gray-600  hover:underline">
            Home
          </Link>
          {state && <span className="mx-2">/</span>}
        </li>

        {/* State Link (if present) */}
        {state && (
          <li>
            <Link
              href={`/locations?state=${encodeURIComponent(state)}`}
              className="text-gray-600 hover:underline"
            >
              {state}
            </Link>
            {city && <span className="mx-2">/</span>}
          </li>
        )}

        {/* City Link (if present) */}
        {city && (
          <li className="text-gray-800 font-semibold">{city}</li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

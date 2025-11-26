import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    if (!links || links.length === 0) return null;

    return (
        <div className="mt-6 flex justify-center space-x-2">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url || "#"}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={
                        `
                        px-3 py-1 border rounded text-sm
                        ${link.active
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-600 hover:bg-gray-100"}
                        ${link.url === null ? "opacity-40 cursor-not-allowed" : ""}
                        `
                    }
                />
            ))}
        </div>
    );
}
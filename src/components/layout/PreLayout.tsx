import Link from 'next/link';

export default function PreLayout({
  children,
  href, // will be a page or nested layout
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={`${href}`}
      className="flex flex-col min-w-[95vw] items-center content-center min-h-[90vh] text-white overflow-hidden justify-center p-24 py-10  text-center "
    >
      {children}
    </Link>
  );
}

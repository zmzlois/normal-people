import React from 'react';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

function PresentationCards({
  href,
  title,
  date,
  description,
}: {
  href: string;
  title: string;
  date: string;
  description: string;
}) {
  return (
    <div>
      <div className="my-1 ">
        <Link href={href} className=" group">
          <div className="px-4 py-6 transition-all duration-300 border-b-1 group-hover:brightness-125 group-hover:bg-zinc-800/20 border-gray-200/20">
            <h2 className="mb-1 text-lg font-light tracking-wide transition transform text-zinc-300 group-hover:text-zinc-50">
              {title}
            </h2>
            <time
              dateTime={date}
              className="block mb-2 text-xs text-gray-600 transition transform group-hover:text-gray-300"
            >
              {/* {format(parseISO(meta.date), 'LLLL d, yyyy')} */}
            </time>
            <div
              className="text-sm [&>*]:mb-1 [&>*:last-child]:mb-0 text-gray-400 group-hover:text-gray-100 transition transform"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PresentationCards;

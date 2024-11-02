import './bundler.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-white">
      {children}
      <div className="container flex justify-end mx-auto">
        <Link href="https://docs.zephyr-cloud.io" target="_blank">
          {' '}
          <Image
            src="https://cdn.prod.website-files.com/669061ee3adb95b628c3acda/66acd2a968324f3e610c1cae_zephyr%20logo.svg"
            alt="Zephyr Cloud Logo"
            width={200}
            height={100}
          ></Image>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <Link href='/'>
      <div className="logoContainer">
        <Image src='/Logo.png' width={54} height={54} priority alt='' />
      </div>
    </Link>
  );
};

export default Logo;

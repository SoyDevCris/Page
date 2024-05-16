import Image from "next/image";
import { FC } from "react";

interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
}

const DevImg: FC<DevImgProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt=''/>
    </div>
  );
};

export default DevImg;

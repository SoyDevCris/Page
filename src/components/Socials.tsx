"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiFacebookFill,
  RiTiktokFill,
} from "react-icons/ri";
import Link from "next/link";
import { FC } from "react";

interface SocialsProps {
  containerStyle: string;
  iconsStyles: string;
}

const icons = [
  {
    path: "https://www.youtube.com/@SoyDevCris",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/soydevcris/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/SoyDevCris",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/SoyDevCris/",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/soydevcris/",
    name: <RiInstagramFill />,
  },
  {
    path: "https://www.tiktok.com/@soydevcris",
    name: <RiTiktokFill />,
  },
];

const Socials: FC<SocialsProps> = ({ containerStyle, iconsStyles }) => {
  return (
    <div className={`${containerStyle}`}>
      {icons.map((icon, index) => {
        return (
          <Link target="_blank" href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

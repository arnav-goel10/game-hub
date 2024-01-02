import { Platform } from "../hooks/useGames";
import { Icon } from "@mui/material";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const platformIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    nintendo: BsNintendoSwitch,
  };
  return (
    <>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug as string}
          component={platformIcons[platform.slug]}
          sx={{ marginRight: 1 }}
        />
      ))}
    </>
  );
};

export default PlatformIconList;

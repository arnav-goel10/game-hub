import { Platform } from "../hooks/useGames";
import { Icon } from "@mui/material";
import { FaPlaystation, FaXbox, FaLinux } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { SiWindows11 } from "react-icons/si";
import { ImAndroid, ImAppleinc } from "react-icons/im";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const platformIcons: { [key: string]: IconType } = {
    pc: SiWindows11,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: ImAppleinc,
    linux: FaLinux,
    android: ImAndroid,
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

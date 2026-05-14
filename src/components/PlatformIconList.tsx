import { HStack, Icon } from "@chakra-ui/react";
import type { Platform } from "../hooks/useGames";
import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            as={iconMap[platform.slug]}
            key={platform.slug}
            color="green.900"
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;

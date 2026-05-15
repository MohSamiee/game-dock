import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
interface Props {
  gameQ: GameQuery;
}
const GameHeading = ({ gameQ }: Props) => {
  const heading = `${gameQ.platform?.name || ""} ${gameQ.genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

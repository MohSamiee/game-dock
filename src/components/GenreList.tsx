import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((d) => (
        <ListItem key={d.id} paddingY="5px">
          <HStack>
            <Image
              borderRadius="4px"
              src={getCroppedImageUrl(d.image_background)}
              alt={d.name}
              boxSize="32px"
            />
            <Button
              onClick={() =>
                selectedGenre?.id === d.id
                  ? onSelectGenre(null)
                  : onSelectGenre(d)
              }
              variant="link"
              fontSize="lg"
              overflow="unset"
              fontWeight={selectedGenre?.id === d.id ? "bold" : "normal"}
            >
              {d.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

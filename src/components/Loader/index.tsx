import { Spinner, Center } from "native-base";

export function Loader() {
  return (
    <Center flex={1}>
      <Spinner />
    </Center>
  );
}

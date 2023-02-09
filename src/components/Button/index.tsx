import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

export function Button({ title, variant = "solid", ...rest }: Props) {
  const isVariant = variant === "outline";

  function condition(paramA: any, paramB: any) {
    return isVariant ? paramA : paramB;
  }

  return (
    <NativeBaseButton
      w="full"
      h={14}
      borderColor="green.500"
      borderWidth={condition(1, 0)}
      bg={condition("transparent", "green.700")}
      _pressed={{
        bg: condition("gray.500", "green.500"),
      }}
      {...rest}
    >
      <Text
        color={condition("green.500", "white")}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}

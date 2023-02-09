import { VStack, Center, Image, Text, Heading, ScrollView } from "native-base";
import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import React from "react";
import { Input } from "~/components/Input";
import { Button } from "~/components/Button";

export function SignIn() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <VStack flex={1} px={10} bg="gray.700">
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <Logo />
          <Text fontSize="sm" color="gray.100">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading mb={6} fontFamily="heading" fontSize="xl" color="gray.100">
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  );
}

import React from "react"
import { Box, Heading, Input, Button, Text, Divider } from "@chakra-ui/core"
import { useForm } from "react-hook-form"

const Newsletter = () => {
  const { register, handleSubmit, errors } = useForm()
  //  for now only log the input
  // setup mailchimp
  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <Box
        pt={20}
        pb={20}
        display="flex"
        flexDirection="column"
        margin="0 auto"
        color="white"
        bg="#191b1f"
        textAlign="center"
      >
        <Divider width={{ base: "85%", lg: "70%" }} margin="0 auto" mb={12} />
        <Box
          rounded="md"
          pt={20}
          pb={24}
          bg="#07070b"
          width={{ base: "85%", lg: "70%" }}
          margin="0 auto"
        >
          <Heading
            fontFamily="Inter"
            fontSize="3xl"
            fontWeight="600"
            width="85%"
            textAlign="center"
            margin="0 auto"
          >
            {" "}
            Expand your knowldge every week
          </Heading>
          <Text mt={2}>No spam. Recieve curated collections.</Text>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            margin="0 auto"
            width="100%"
            mt={12}
            flexDirection="column"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                variant="outline"
                placeholder="Email Address"
                name="EmailAddress"
                ref={register({ required: true })}
                color="gray.700"
                width={{ sm: "100%", lg: "340px" }}
              />

              <Box display="flex" flexDirection="column">
                {errors.EmailAddress && <span>Email Address is required</span>}
                <Button
                  alignSelf="center"
                  display="block"
                  fontSize="sm"
                  size="md"
                  color="gray.700"
                  rounded="sm"
                  width="auto"
                  type="submit"
                  mt={6}
                >
                  Sign me up
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Newsletter

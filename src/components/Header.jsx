import { ButtonGroup } from "@chakra-ui/button";
import { Box, Center, Heading } from "@chakra-ui/layout";

function Header(props) {
  const { title } = props;
  const imageUrl = "https://img.freepik.com/fotos-premium/bicicleta-cima-montana-paisaje-al-atardecer-ia-generativa-bicicletas-deportivas_788189-8372.jpg";

  return (
    <Box m={5} p={16} bg='red' bgImage={`url(${imageUrl})`} bgSize="cover" bgPosition="center">
      <Center flexDirection='column'  >
        <Heading as='h1' pb={6}>{title}</Heading>
        <ButtonGroup gap={6}>
          <Box as='button' borderRadius='1px' border='1px' px={6} py={2} _hover={{bg:'white', color:'black', border:'1px'}}>
            VER DETALLES
          </Box>
          <Box as='button' borderRadius='1px' border='1px' px={6}  _hover={{bg:'white', color:'black', border:'none'}}>
            VER VIDEO
          </Box>
        </ButtonGroup>
      </Center>
    </Box>
  )
}

export default Header
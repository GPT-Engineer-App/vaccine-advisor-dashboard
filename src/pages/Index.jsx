// Import Chakra UI components and icons
import { Box, Flex, Divider, Heading, Text, Select, Checkbox, CheckboxGroup, Stack, Button, Link, useToast } from "@chakra-ui/react";
import { FaSyringe, FaNotesMedical, FaUserMd } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Dummy function to simulate vaccine recommendation
  const handleVaccineRecommendation = () => {
    toast({
      title: "Recommendation Processed.",
      description: "The vaccine recommendations for the patient have been successfully generated.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={6}>
        <FaSyringe /> Tablero de Asesoramiento de Vacunas
      </Heading>
      <Divider mb={6} />

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          <FaUserMd /> Professional Profile
        </Heading>
        <Select placeholder="Seleccione el perfil profesional">
          <option>Unidad de Medicina Preventiva y Salud Pública</option>
          <option>Centro Internacional de Vacunación</option>
          <option>Gestor de Salud Pública</option>
          <option>Atención Primaria</option>
          <option>Prevención de Riesgos Laborales</option>
          <option>Sociedad Científica</option>
          <option>Industria Farmacéutica</option>
        </Select>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          Datos Demográficos del Paciente
        </Heading>
        <CheckboxGroup colorScheme="green">
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            <Checkbox value="Male">Varón</Checkbox>
            <Checkbox value="Female">Mujer</Checkbox>
            <Checkbox value="Caucasian">Caucásico</Checkbox>
            <Checkbox value="Black">Negro</Checkbox>
            <Checkbox value="Asian">Asiático</Checkbox>
            <Checkbox value="Mixed">Mestizo</Checkbox>
          </Stack>
        </CheckboxGroup>
        <Select placeholder="Patient's Origin" mt={4}>
          <option>Resident</option>
          <option>Foreigner</option>
        </Select>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          Factores de Riesgo
        </Heading>
        <CheckboxGroup colorScheme="green">
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            <Checkbox value="Pacientes institucionalizados edad avanzada">Pacientes institucionalizados edad avanzada</Checkbox>
            <Checkbox value="Enfermedades crónicas">Enfermedades crónicas</Checkbox>
            <Checkbox value="Cardiopatías e hipertensión">Cardiopatías e hipertensión</Checkbox>
            <Checkbox value="Enfermedades pulmonares crónicas">Enfermedades pulmonares crónicas</Checkbox>
            <Checkbox value="Diabetes">Diabetes</Checkbox>
            <Checkbox value="Trasplante de órgano sólido y/o líquido">Trasplante de órgano sólido y/o líquido</Checkbox>
            <Checkbox value="Secundaria">Inmunosupresión secundaria</Checkbox>
            <Checkbox value="Primaria">Inmunosupresión primaria</Checkbox>
            <Checkbox value="Enfermedad autoinmune">Enfermedad autoinmune</Checkbox>
            <Checkbox value="Cáncer">Cáncer</Checkbox>
            <Checkbox value="Hipercolesterolemia y/o obesidad mórbida">Hipercolesterolemia y/o obesidad mórbida</Checkbox>
            <Checkbox value="Niño nacido pre-término">Niño nacido pre-término</Checkbox>
            <Checkbox value="Edad avanzada">Edad avanzada</Checkbox>
            <Checkbox value="Paciente con eventos adversos tras inmunización">Paciente con eventos adversos tras inmunización</Checkbox>
            <Checkbox value="Paciente con riesgo ocupacional">Paciente con riesgo ocupacional</Checkbox>
            <Checkbox value="Paciente que va a viajar">Paciente que va a viajar</Checkbox>
            <Checkbox value="Embarazo y/o lactancia">Embarazo y/o lactancia</Checkbox>
            <Checkbox value="Reclusos, uso de drogas por vía parenteral, trabajadores sexuales">Reclusos, uso de drogas por vía parenteral, trabajadores sexuales</Checkbox>
            <Checkbox value="Hombres que tienen sexo con hombres">Hombres que tienen sexo con hombres</Checkbox>
            <Checkbox value="Receptores de inmunoglobulinas y derivados sanguíneos">Receptores de inmunoglobulinas y derivados sanguíneos</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>

      <Box mb={6}>
        <Button colorScheme="teal" size="lg" leftIcon={<FaNotesMedical />} onClick={handleVaccineRecommendation}>
          Generar Recomendaciones de Vacunación
        </Button>
      </Box>

      <Box mb={6}>
        <Text fontSize="md">Las recomendaciones de vacunación se basan en las últimas guías clínicas para cada comunidad autónoma. Consulte siempre las fuentes oficiales para obtener la información más actualizada.</Text>
        <Link href="https://cima.aemps.es/cima/publico/home.html" isExternal>
          Sitio Web Oficial de CIMA <FaSyringe />
        </Link>
      </Box>

      <Box>
        <Text fontSize="lg" fontWeight="bold">
          Por favor, revise toda la información antes de enviarla, ya que las recomendaciones se adaptarán a los datos proporcionados.
        </Text>
      </Box>
    </Box>
  );
};

export default Index;

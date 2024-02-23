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
            <Checkbox value="Elderly Institutionalized Patients">Elderly Institutionalized Patients</Checkbox>
            <Checkbox value="Chronic Diseases">Chronic Diseases</Checkbox>
            <Checkbox value="Cardiopathies and Hypertension">Cardiopathies and Hypertension</Checkbox>
            <Checkbox value="Chronic Pulmonary Diseases">Chronic Pulmonary Diseases</Checkbox>
            {/* ... other checkboxes */}
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

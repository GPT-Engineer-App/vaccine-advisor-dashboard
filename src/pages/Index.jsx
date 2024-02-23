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
        <FaSyringe /> Vaccine Advisory Dashboard
      </Heading>
      <Divider mb={6} />

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          <FaUserMd /> Professional Profile
        </Heading>
        <Select placeholder="Select professional profile">
          <option>Unit of Preventive Medicine and Public Health</option>
          <option>International Vaccination Center</option>
          <option>Public Health Manager</option>
          <option>Primary Care</option>
          <option>Occupational Risk Prevention</option>
          <option>Scientific Society</option>
          <option>Pharmaceutical Industry</option>
        </Select>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          Patient Demographics
        </Heading>
        <CheckboxGroup colorScheme="green">
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            <Checkbox value="Male">Male</Checkbox>
            <Checkbox value="Female">Female</Checkbox>
            <Checkbox value="Caucasian">Caucasian</Checkbox>
            <Checkbox value="Black">Black</Checkbox>
            <Checkbox value="Asian">Asian</Checkbox>
            <Checkbox value="Mixed">Mixed</Checkbox>
          </Stack>
        </CheckboxGroup>
        <Select placeholder="Patient's Origin" mt={4}>
          <option>Resident</option>
          <option>Foreigner</option>
        </Select>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          Risk Factors
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
          Generate Vaccine Recommendations
        </Button>
      </Box>

      <Box mb={6}>
        <Text fontSize="md">The vaccine recommendations are based on the latest clinical guidelines for each autonomous community. Always refer to the official sources for the most up-to-date information.</Text>
        <Link href="https://cima.aemps.es/cima/publico/home.html" isExternal>
          CIMA Official Website <FaSyringe />
        </Link>
      </Box>

      <Box>
        <Text fontSize="lg" fontWeight="bold">
          Please review all the information before submitting as the recommendations will be tailored to the provided data.
        </Text>
      </Box>
    </Box>
  );
};

export default Index;

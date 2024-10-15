"use client"
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

const ClosedPositions = () => {
  return (
    <Box p="5" bg="white" boxShadow="md" borderRadius="md">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Position ID</Th>
            <Th>Symbol</Th>
            <Th>Status</Th>
            <Th>Open Time</Th>
            <Th>Open Price</Th>
            <Th>Close Time</Th>
            <Th>Close Price</Th>
            <Th>Volume</Th>
            <Th>Profit</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>305422</Td>
            <Td>XAUUSD</Td>
            <Td>Buy</Td>
            <Td>13 May 2024</Td>
            <Td>0.88389</Td>
            <Td>13 May 2024</Td>
            <Td>0.88912</Td>
            <Td>1.00</Td>
            <Td>$30.04</Td>
          </Tr>
          {/* Add more rows as needed */}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ClosedPositions;

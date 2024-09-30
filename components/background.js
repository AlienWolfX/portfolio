import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const SectionWork = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: 768px) {
    padding: 0.5em;
  }
`

export const SectionTitle = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 1em;
  }
`

export const SectionYear = styled.span`
  font-weight: bold;
  color: #6c757d; /* You can change this color to match your theme */
  margin-right: 1em;
  min-width: 50px; /* Adjust width as needed */

  @media (max-width: 768px) {
    margin-right: 0.5em;
    min-width: 40px;
  }
`

export const SectionDesc = styled.p`
  margin-top: 0.5em;
  font-size: 1em;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`

export const SectionContent = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;

  @media (max-width: 768px) {
    margin-top: 0.3em;
  }
`
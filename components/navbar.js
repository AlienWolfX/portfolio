import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import ToggleMusic from './toggleMusic'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

// const MenuLink = forwardRef((props, ref) => (
//   <Link ref={ref} as={NextLink} {...props} />
// ))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/achievements" path={path}>
            Achievements
          </LinkItem>
          <LinkItem href="/skills" path={path}>
            Skills
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects  
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact Me
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <Flex gap={2} display={{ base: 'none', md: 'flex' }}>
            <ToggleMusic />
            <ThemeToggleButton />
          </Flex>

          <Box ml={3} display={{ base: 'inline-block', md: 'none' }}>
            <Flex align="center" gap={2}>
              <ToggleMusic />
              <ThemeToggleButton />
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <MenuItem as={NextLink} href="/">
                    About
                  </MenuItem>
                  <MenuItem as={NextLink} href="/achievements">
                    Achievements
                  </MenuItem>
                  <MenuItem as={NextLink} href="/skills">
                    Skills
                  </MenuItem>
                  <MenuItem as={NextLink} href="/projects">
                    Projects
                  </MenuItem>
                  <MenuItem as={NextLink} href="/contact">
                    Contact Me
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar

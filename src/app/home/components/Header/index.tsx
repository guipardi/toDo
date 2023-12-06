import Image from "next/image"
import { HeaderContainer } from "./styles"
import logo from '@/utils/images/Logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <Image src={logo} alt="Logo projeto ToDo"/>
    </HeaderContainer>
  )
}
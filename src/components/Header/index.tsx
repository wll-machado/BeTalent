import { HeaderContainer } from "./styles"
import logo from "/logo.png"

function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="logo da BeTalent" />
      </div>
    </HeaderContainer>
  )
}

export default Header

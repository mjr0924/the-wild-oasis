import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { useTranslation } from "react-i18next";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const {
    i18n: { changeLanguage, language, dir },
  } = useTranslation();

  const onChangeLocale = (e) => {
    const { value } = e.target;
    changeLanguage(value);
  };

  return (
    <StyledHeader dir={dir()}>
      <select onChange={onChangeLocale} value={language}>
        <option value="en">🇺🇸 English</option>
        <option value="fa">🇮🇷 Persian</option>
      </select>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;

import styled from "styled-components";
import testItemData from "../../utils/data/testItemData";
import Item from "../Item/Item";

export default function ItemListGeneral() {
  return (
    <>
      <StyledUl>
        {testItemData.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </StyledUl>
    </>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  display: grid;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

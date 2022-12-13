import styled from "styled-components";
import dummyItems from "../../utils/data/dummyItems";
import Item from "../Item/Item";

export default function ItemList() {
  return (
    <>
      <StyledUl>
        {dummyItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </StyledUl>
    </>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
`;

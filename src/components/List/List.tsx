import styled from "styled-components"
import UserCard from "../UserCard/UserCard"

const list = (new Array(20)).fill("").map(() => ({
    name: "Test Name"
}))

const StyledWrapper = styled.div`
    display: flex;
    gap: 16px;
    padding: 16px;
    flex-wrap: wrap;
`

export const List = () => {
    console.log(list)
    return (
        <StyledWrapper>
            {list.map(({ name }, idx) => (
                <UserCard key={idx} name={name} />
            ))}
        </StyledWrapper>
    )
}
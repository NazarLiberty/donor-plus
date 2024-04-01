import styled from "styled-components"
import { List } from "../components/List/List"
import { Button } from "@mui/material"
import { NewUserModal } from "../components/NewUserModal/NewUserModal"
import { useState } from "react"

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const Main = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <StyledWrapper>
            {isOpenModal && <NewUserModal onClose={() => setIsOpenModal(false)} />}
            <Button onClick={() => setIsOpenModal(true)} size="large" variant="contained"> 
                Додати
            </Button>
            <List />
        </StyledWrapper>
    )
}
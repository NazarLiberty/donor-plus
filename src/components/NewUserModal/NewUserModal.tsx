import { Button, Modal, Stack, TextField, Typography, colors } from "@mui/material";
import { ModalClose } from "../ModalClose/ModalClose";
import styled from "styled-components";
import { Box } from "@mui/system";
import { FC, useState } from "react";

const StyledModal = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
`



const StyledContainer = styled.div`
    width: 80%;
    height: 50%;
    background-color: #fff;
    border-radius: 6px;
    display: flex;
    padding: 24px;
    flex-direction: column;
    gap: 24px;
`

const StyledBox = styled(Box) <{ $isActive?: boolean }>`
    border-radius: 6px;
    box-shadow: 4px 5px 15px -5px black;
    padding: 12px 24px;
    flex: 1;
    text-align: center;
    cursor: pointer;
    background-color: ${(props) => props.$isActive ? colors.blue[300] : "#fff"};

    &:hover {
        background-color: ${colors.blue[200]};
    };

    $:active {
        background-color: ${colors.blue[800]};
    };
`

interface Props {
    onClose: () => void;
}

enum UserType {
    FIRST_TIME,
    SECOND_TIME,
} 

export const NewUserModal: FC<Props> = ({ onClose }) => {
    const [activeType, setActiveType] = useState<null | UserType>(null);

    return (
        <StyledModal open={true}>
            <StyledContainer>
                <ModalClose closeModalFn={onClose} />
                <Stack gap={5}>
                    <TextField label="Ім'я донора" />
                    <Stack direction="row" gap={2} justifyContent="center">
                        <StyledBox $isActive={activeType === UserType.FIRST_TIME} onClick={() => setActiveType(UserType.FIRST_TIME)}>
                            <Typography color="black">
                                Первинний
                            </Typography>
                        </StyledBox>
                        <StyledBox $isActive={activeType === UserType.SECOND_TIME} onClick={() => setActiveType(UserType.SECOND_TIME)}>
                            <Typography color="black">
                                Вторинний
                            </Typography>
                        </StyledBox>
                    </Stack>
                </Stack>
    
                <Button size="large" variant="contained" sx={{ marginTop: "auto" }}>
                    Створити нового донора
                </Button>
            </StyledContainer>
        </StyledModal>
    )
}
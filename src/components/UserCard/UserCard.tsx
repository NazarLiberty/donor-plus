import { FC } from 'react';
import { styled } from 'styled-components';

interface Props {
    name: string
}

const Card = styled.div`
  flex: 1 1 130px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
`;

const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Name = styled.div`
  font-size: 16px;
  color: black;
  font-weight: 600;
  text-align: center;
`;

const UserCard: FC<Props> = ({ name }) => {
    const avatarLetter = name.charAt(0).toUpperCase();

    return (
        <Card>
            <Avatar>{avatarLetter}</Avatar>
            <Name>{name}</Name>
        </Card>
    );
};

export default UserCard;
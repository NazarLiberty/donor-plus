import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';
import { IconButton, colors } from '@mui/material';

import type { FC } from 'react';
import styled from 'styled-components';

interface ModalClosePropsInterface {
	closeModalFn: () => void;
	BeforeContent?: JSX.Element | false;
	color?: string;
}

export const ModalCloseWrapper = styled.div`
	position: absolute;
	z-index: 99;
	top: 8px;
	right: 8px;
`;

export const ModalCloseIcon = styled(Icon)`
	margin: 0;
`;

export const ModalClose: FC<ModalClosePropsInterface> = ({
	closeModalFn,
	BeforeContent,
	color,
}) => {
	return (
		<ModalCloseWrapper>
			{BeforeContent}
			<IconButton aria-label="close" onClick={closeModalFn}>
				<ModalCloseIcon
					data-test="dialog-close-button"
					path={mdiClose}
					size={'1em'}
					color={color || colors.blueGrey[100]}
				/>
			</IconButton>
		</ModalCloseWrapper>
	);
};

import { FC } from 'react';
import Button from '../../../Button';
import { ButtonProps } from '../../../Button/Button';
import Loader from '../../../Loader';
import { useFormContext } from '../../Form/Form.context';
import styles from './SubmitForm.style';

export const SubmitForm: FC<ButtonProps> = ({ sx = [], disabled, ...props }) => {
    const { validationState, formState } = useFormContext();
    const containsValidationErrors = Object.values(validationState).some((validationError) => !!validationError);
    const disableSubmit = containsValidationErrors || disabled || formState.status === 'submitting';

    return (
        <Button type="submit" sx={[styles.button, ...sx]} disabled={disableSubmit} {...props}>
            {formState.status === 'submitting' ? <Loader /> : 'Submit'}
        </Button>
    );
};

export default SubmitForm;

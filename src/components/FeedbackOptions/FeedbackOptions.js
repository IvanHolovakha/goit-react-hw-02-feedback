import PropTypes from 'prop-types';
import { ButtonSection, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
    <ButtonSection>
        {options.map((option, index) => 
        <Button 
        key={index} 
        type="button" 
        name={option} 
        onClick={onLeaveFeedback}>
        {option}
        </Button>)}
    </ButtonSection>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
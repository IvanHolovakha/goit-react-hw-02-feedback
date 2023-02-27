;

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
    <div>
        {options.map((option, index) => 
        <button 
        key={index} 
        type="button" 
        name={option} 
        onClick={onLeaveFeedback}>
        {option}
        </button>)}
    </div>
    );
};
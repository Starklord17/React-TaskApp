import { TodoIcon } from '.'

function CheckIcon({ completed, onClick}) {
    
    return (
        <TodoIcon 
            type= "check"
            color={completed ? '#00FF00' : 'gray'}
            completed = {completed}
            onClick={onClick}
        />
    );
}

export { CheckIcon };
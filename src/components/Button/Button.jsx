import {Button} from 'reactstrap';

function BaseButton({text, color}) {
    return(
        <Button color={color} className="animation-on-hover w-100">{text}</Button>
    )
    
}

export default BaseButton;
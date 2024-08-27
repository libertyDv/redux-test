import { useSelector, useDispatch } from "react-redux";
import { changeEmail } from "../state/userSlice";

export function Email() {
    const email = useSelector((state) => state.user.email);
    const dispatch = useDispatch();

    return (
        <input
            type="email"
            value={email}
            onChange={(event) => dispatch(changeEmail(event.target.value))}
        />
    )
}
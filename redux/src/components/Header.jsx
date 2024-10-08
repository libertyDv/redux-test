import { useSelector } from "react-redux";

export function Header() {

    const user = useSelector((state) => state.user); // el nombre que le puse en userSlice

    return (
        <header>
            <ul>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
            </ul>
        </header>
    )

}
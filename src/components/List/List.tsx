import { NavLink } from "react-router-dom";

export default function List({data}: {data:any}) {
    return (
        <ul>
            {data && data.map((el: any) =>
                <li key={el.id}>
                    <NavLink to={`/${el.login}/details`}>
                        <img src={el.avatar_url} className="Avatar" />
                        {el.login}
                    </NavLink>
                </li>)}
        </ul>
    )
}

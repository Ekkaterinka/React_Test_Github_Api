import { useSelector, useDispatch } from "react-redux";
import { changeUsersField, clearSearch } from "../redux/slices/usersSlice";
import { NavLink } from "react-router-dom";

export default function Users() {
    const { items, loading, error, search } = useSelector((state: any) => state.users);
    const dispatch = useDispatch();

    const handleSearch = (evt: any) => {
        const { value } = evt.target;
        if (value === '') { dispatch(clearSearch()); }
        else { dispatch(changeUsersField({ search: value })); }
    };
    const hasQuery = search.trim() !== '';
    const List = items.items?.map((el: any) =>
            <li key={el.id}><NavLink to={`/${el.login}/details`}>
                <img src={el.avatar_url} className="Avatar" />
                {el.login}</NavLink></li>
);

    return (
        <div className="container">
            <div className="search">
                <h1>Поиск пользователей по имени в GitHub</h1>
                <br />
                <input type="search" value={search}
                    onChange={handleSearch} />
                {!hasQuery && <div>Введите что-нибудь для поиска</div>}
                {hasQuery && loading && <div>searching...</div>}
            </div>
            {error ?
                <div>Error occured</div>
                :
                <div className="list">
                    {List}
                </div>}
        </div>
    )
}





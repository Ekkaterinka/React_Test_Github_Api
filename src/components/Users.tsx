import { useSelector, useDispatch } from "react-redux";
import { changeUsersField, clearSearch } from "../redux/slices/usersSlice";
import { Link } from "react-router-dom";

export default function Users() {
    const { items, loading, error, search } = useSelector((state: any) => state.users);
    const dispatch = useDispatch();

    const handleSearch = (evt: any) => {
        const { value } = evt.target;
        if (value === '') { dispatch(clearSearch()); }
        else { dispatch(changeUsersField({ search: value })); }
    };
    const hasQuery = search.trim() !== '';
    const List = items.items?.map((p: any) =>
        <Link to={`/${p.login}/details`} key={p.id}>
            <li >
                <img src={p.avatar_url} className="Avatar" />
                {p.login}</li>
        </Link>);

    return (
        <>
            <div>
                <input type="search" value={search}
                    onChange={handleSearch} /></div>
            {!hasQuery && <div>Введите что-нибудь для поиска</div>}
            {hasQuery && loading && <div>searching...</div>}
            {error ? (<div>Error occured</div>) : 
            (<div>
            {List}
            </div>)}
        </>
    )
}





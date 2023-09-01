import { useSelector, useDispatch } from "react-redux";
import { changeUsersField, clearSearch } from "../redux/slices/usersSlice";
import ListItems from "../components/List/ListItems";

export default function Users() {
    const { loading, error, search } = useSelector((state: any) => state.users);
    const items = useSelector((state: any) => state.users.items);
    const dispatch = useDispatch();

    const handleSearch = (evt: any) => {
        const { value } = evt.target;
        if (value === '') { dispatch(clearSearch()); }
        else { dispatch(changeUsersField({ search: value })); }
    };
    const hasQuery = search.trim() !== '';



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
            {items.items?.length === 0 && <p className="Never">Ничего не найдено!</p> }
            {error ?
                <div>Error occured</div>
                :
                <ListItems />}
        </div>
    )
}





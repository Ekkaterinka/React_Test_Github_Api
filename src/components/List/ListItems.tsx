import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import List from "./List";

type Data = {
    avatar_url: string;
    login: string;
    id: number;
}

export default function ListItems() {
    const items = useSelector((state: any) => state.users.items);
    const [page, setPage] = useState(0)
    const [filterData, setFilterData] = useState<Data[]>();

    const quantity = 6;

    useEffect(() => {
        setFilterData(
            items.items?.filter((_item: any, index: number) => {
                return (index >= page * quantity) && (index < (page + 1) * quantity);
            })
        );
    }, [page, items]);

    return (

        <div className="list">
            <List data={filterData}/>
            <Pagination props={{ items: items, setPage: setPage, quantity: quantity, page: page }} />
        </div>
    )
}



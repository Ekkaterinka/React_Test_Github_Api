import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";


export default function Pagination({ props }: { props: any }) {
    const items = props.items;
    const quantity = props.quantity;
    const setPage = props.setPage;
    const page = props.page;

    const pageCount = Math.ceil(items.items?.length / quantity)

    return (
        <>
            {pageCount > 0 &&
                <ReactPaginate
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            activeClassName={"active"}
            onPageChange={(event) => setPage(event.selected)}
            pageCount={pageCount}
            breakLabel="..."
            previousLabel={
                <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                    <AiFillLeftCircle />
                </IconContext.Provider>
            }
            nextLabel={
                pageCount !== (page+1) && 
                <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                    <AiFillRightCircle />
                </IconContext.Provider>
            }
        />}
        </>
    )
}



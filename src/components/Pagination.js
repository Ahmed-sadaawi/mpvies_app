/* بسم الله الرحمن الرحيم */

import ReactPaginate from "react-paginate";

function Pagination({handlePageClick, pageCount}){
    return(
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالي >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< السابق"
            containerClassName={"pagination justify-content-center mt-5"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default Pagination;
/* الحمد لله رب العالمين */
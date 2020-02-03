import React from "react";
import ReactPaginate from "react-paginate";
import "./Pages.css";

export function Pages(props) {
  const pageCount = Math.ceil((props.count ? props.count : 0) / 30);

  return (
    <div className="pagination">
      <ReactPaginate
        disableInitialCallback={true}
        initialPage={props.currentPage - 1}
        previousLabel={"PREV"}
        nextLabel={"NEXT"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={n => props.handleClick(n.selected + 1)}
        pageClassName={"page"}
        activeClassName={"page-enabled"}
        breakClassName={"page-break"}
        previousClassName={"page-previous"}
        nextClassName={"page-next"}
        disabledClassName={"page-disabled"}
      />
    </div>
  );
}

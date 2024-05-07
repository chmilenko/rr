/* eslint-disable react/prop-types */
import img from "../../assets/strelka.png";
import "./pagination.css";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="container">
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Назад
        </button>
        <div className="buttons">{renderPageNumbers()}</div>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default Pagination;

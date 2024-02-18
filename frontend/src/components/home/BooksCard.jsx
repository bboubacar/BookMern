import SingleCardBook from "./SingleCardBook";

const BooksCard = ({ books }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((item) => (
                <SingleCardBook key={item._id} book={item} />
            ))}
        </div>
    );
};

export default BooksCard;

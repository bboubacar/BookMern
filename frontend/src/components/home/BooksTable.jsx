import SingleTableBook from "./SingleTableBook";

function BooksTable({ books }) {
    const bookArray = () => {
        return books.map((book, index) => {
            return <SingleTableBook book={book} index={index} key={book._id} />;
        });
    };

    return (
        <table className="w-full border-separate border-spacing-2">
            <thead>
                <tr>
                    <th className="border border-slate-600 rounded-md">No</th>
                    <th className="border border-slate-600 rounded-md">
                        Title
                    </th>
                    <th className="border border-slate-600 rounded-md max-md:hidden">
                        Author
                    </th>
                    <th className="border border-slate-600 rounded-md max-md:hidden">
                        Publish Year
                    </th>
                    <th className="border border-slate-600 rounded-md">
                        Operations
                    </th>
                </tr>
            </thead>
            <tbody>{bookArray()}</tbody>
        </table>
    );
}

export default BooksTable;

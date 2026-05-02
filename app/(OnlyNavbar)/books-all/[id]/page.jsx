import BookDetails from "@/components/all books/BookDetails";

export const metadata = {
    title: "Book Details",
}

const BookDetailsPage = ({ params }) => {
    return <BookDetails bookId={params.id} />;
};

export default BookDetailsPage;

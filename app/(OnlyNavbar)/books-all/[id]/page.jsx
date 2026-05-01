import BookDetails from "@/components/all books/BookDetails";

const BookDetailsPage = ({ params }) => {
    return <BookDetails bookId={params.id} />;
};

export default BookDetailsPage;

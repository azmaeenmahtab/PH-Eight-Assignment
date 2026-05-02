const STORAGE_KEY = "borrowHistory";

export const getBorrowHistory = () => {
    if (typeof window === "undefined") return [];
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
};

export const saveBorrowHistory = (items) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

export const addBorrowHistory = (book) => {
    if (!book) return { added: false, history: [] };

    const history = getBorrowHistory();
    const exists = history.some((item) => String(item.id) === String(book.id));
    if (exists) {
        return { added: false, history };
    }

    const next = [
        {
            id: book.id,
            title: book.title,
            author: book.author,
            image: book.image_url,
            borrowedAt: new Date().toISOString(),
        },
        ...history,
    ];

    saveBorrowHistory(next);
    return { added: true, history: next };
};

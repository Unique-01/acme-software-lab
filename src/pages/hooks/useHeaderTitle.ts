import { useState, useEffect } from "react";

let setTitle: (title: string) => void;

export const useHeaderTitle = () => {
    const [title, updateTitle] = useState("");

    useEffect(() => {
        setTitle = updateTitle;
    }, []);

    return title;
};

export const updateHeaderTitle = (title: string) => {
    if (setTitle) {
        setTitle(title);
    }
};

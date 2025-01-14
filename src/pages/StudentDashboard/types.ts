export interface ClassItem {
    id: string;
    title: string;
    tutor: string;
    time: string;
    date: Date;
    attended?: boolean; // Optional property for attendance
}

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export interface DayButtonProps {
    day: string;
    date: number;
    isCurrentDate: boolean;
    onClick: () => void;
}

export interface ClassDisplayProps {
    classes: ClassItem[];
}

export const backgroundColors = ["bg-red-200", "bg-lime-200"];

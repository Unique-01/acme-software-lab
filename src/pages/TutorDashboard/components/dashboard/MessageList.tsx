import SearchBar from "../SearchBar";

const messages = [
    {
        id: 1,
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        content: "Hey, I need help with my homework.",
        time: "10:30 AM",
        notification: 2,
    },
    {
        id: 2,
        name: "Jane Smith",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        content: "Can we reschedule our session?",
        time: "11:00 AM",
        notification: 1,
    },
    {
        id: 3,
        name: "Alice Johnson",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        content: "I have completed the assignment.",
        time: "12:15 PM",
        notification: 0,
    },
    {
        id: 4,
        name: "Bob Brown",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        content: "Can you review my essay?",
        time: "1:45 PM",
        notification: 3,
    },
    {
        id: 5,
        name: "Charlie Davis",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        content: "What is the homework for today?",
        time: "2:30 PM",
        notification: 1,
    },
];

interface MessageProps {
    message: {
        id: string | number;
        name: string;
        image?: string;
        content: string;
        time: string;
        notification: number;
    };
}

const MessageCard: React.FC<MessageProps> = ({ message }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <img
                    src={message.image}
                    alt=""
                    className="w-16 h-16 rounded-full"
                />
                <div className="space-y-2">
                    <p className="text-blue-800 font-bold text-xl">
                        {message.name}
                    </p>
                    <p className="text-gray-400 font-normal">
                        {message.content.split(" ").slice(0, 5).join(" ") +
                            (message.content.split(" ").length > 5
                                ? "..."
                                : "")}
                    </p>
                </div>
            </div>

            <div className=" text-gray-400 font-normal space-y-2 ">
                <div className="text-nowrap">{message.time}</div>
                <div className="float-right">
                    <div className="bg-orange-400 rounded-full h-6 w-6 flex justify-center items-center  text-white p-2">
                        {message.notification}
                    </div>
                </div>
            </div>
        </div>
    );
};

const MessageList: React.FC = () => {
    return (
        <div className="bg-white p-5 pt-7 rounded-2xl space-y-5">
            <div className="space-y-3">
                <h1 className="text-blue-900 font-bold text-2xl">Messages</h1>
            </div>
            <div>
                <SearchBar placeholder="Search messages..." />
            </div>
            <div className="space-y-5 ">
                {messages.map((message) => (
                    <MessageCard key={message.id} message={message} />
                ))}
            </div>
        </div>
    );
};

export default MessageList;

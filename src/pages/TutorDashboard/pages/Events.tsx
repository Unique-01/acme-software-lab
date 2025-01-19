import Calendar from "../components/Calendar";

const Events: React.FC = () => {
    return (
        <div className="grid grid-cols-7">
            <div className="col-span-5">
                <Calendar />
            </div>
        </div>
    );
};

export default Events;

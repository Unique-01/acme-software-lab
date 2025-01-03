import PaymentTabNavigation from "./components/PaymentTabNavigation";

const PaymentTable: React.FC = () => {
    return (
        <div>
            <div className="p-8 ps-10">
                <h1 className="poppins text-xl">Payment</h1>
            </div>
            <div>
                <PaymentTabNavigation />
            </div>
        </div>
    );
};

export default PaymentTable;

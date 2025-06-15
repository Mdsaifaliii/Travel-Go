import CashfreePaymentButton from "../components/CashfreePaymentButton";

const CheckoutPage = () => {
  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-md max-w-2xl mx-auto mt-8">
      <h1 className="text-lg font-bold text-blue-700 mb-4">Checkout</h1>
      <CashfreePaymentButton />
    </div>
  );
};

export default CheckoutPage;

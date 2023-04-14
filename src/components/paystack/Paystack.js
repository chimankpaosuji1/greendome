import PaystackPop from "@paystack/inline-js";

export const Paystack = (email, amount) => {
  const handler = PaystackPop.setup({
    key: "pk_test_58a4b072554e60120e2e590e974914a5ec09ff70",
    email,
    amount: amount * 100,

    onClose: () => {
      alert("Window closed.");
    },
    callback: (response) => {
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
  });

  handler.openIframe();
  
  
};
// window.location = "/success";

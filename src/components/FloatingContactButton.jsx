import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingContactButton = () => {
  return (
    <a
      href="/contact"
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50"
      title="Contact Us"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingContactButton;

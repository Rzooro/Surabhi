import React, { useState } from "react";
import { FaCheck, FaCaretDown } from "react-icons/fa6";

const DonationCard = () => {
  const [donationType, setDonationType] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [customAmount, setCustomAmount] = useState("");
  const [dedicate, setDedicate] = useState(false);

  const handleDonationTypeChange = (type) => setDonationType(type);
  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount);
  };
  const handleCustomAmountChange = (e) => {
    setSelectedAmount("");
    setCustomAmount(e.target.value);
  };
  const handleCurrencyChange = (e) => setCurrency(e.target.value);
  const handleDedicateChange = () => setDedicate(!dedicate);

  const getCurrencySymbol = (currency) => {
    switch (currency) {
      case "INR":
        return "₹";
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "GBP":
        return "£";
      case "CAD":
        return "C$";
      case "AUD":
        return "A$";
      default:
        return "₹";
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 lap:w-[32%] desk:w-[50%] font-Archivo">
      <div className="flex justify-center mb-4 gap-5">
        <button
          onClick={() => handleDonationTypeChange("one-time")}
          className={`px-4 py-2 rounded-lg duration-200 ${donationType === "one-time" ? "bg-lime-600 text-white" : "bg-gray-200 text-gray-700 hover:ring hover:ring-lime-600"} focus:outline-none`}>
          One time
        </button>
        <button
          onClick={() => handleDonationTypeChange("monthly")}
          className={`px-4 py-2 rounded-lg duration-200 ${donationType === "monthly" ? "bg-lime-600 text-white" : "bg-gray-200 text-gray-700 hover:ring hover:ring-lime-600"} focus:outline-none`}>
          &#9829; Monthly
        </button>
      </div>
      <p className="text-gray-700 mb-4 text-center">
        Your donation supports our cause.
      </p>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {["15000", "8000", "5000", "3000", "1500", "1000"].map((amount) => (
          <button
            key={amount}
            onClick={() => handleAmountChange(amount)}
            className={`px-0 py-2 rounded-lg border lap:hover:-translate-y-0.5 lap:hover:drop-shadow-lg duration-300 ${selectedAmount === amount ? "bg-lime-500 text-white" : "bg-gray-200 text-gray-700"}`}>
            {getCurrencySymbol(currency)}
            {amount}
          </button>
        ))}
      </div>
      <div className="flex mb-4 border border-gray-300 rounded-lg items-center pr-1">
        <span className="inline-flex items-center text-gray-700 text-xl ml-3 focus:ring-lime-600">
          {getCurrencySymbol(currency)}
        </span>
        <input
          type="number"
          value={customAmount}
          onChange={handleCustomAmountChange}
          className="w-full py-2 focus:outline-none text-left text-2xl appearance-none pl-1"
          placeholder="Amount"
        />
        <div className="flex items-center">
          <select
            value={currency}
            onChange={handleCurrencyChange}
            className=" px-2 rounded-lg focus:outline-none appearance-none border border-gray-300 text-center"
            id="cu-sel">
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="AUD">AUD</option>
          </select>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <label
          htmlFor="chk-1"
          className="flex relative text-gray-700 text-base items-center">
          <input
            type="checkbox"
            id="chk-1"
            checked={dedicate}
            onChange={handleDedicateChange}
            className="mr-1 leading-tight rounded-md appearance-none size-[1.15rem] bg-gray-100 border border-gray-500 
            checked:bg-lime-600 peer duration-300 "
          />
          <FaCheck className="absolute left-0.5 top-[0.3rem] size-[0.9rem] opacity-0 peer-checked:opacity-100 text-white duration-300" />
          Dedicate this donation
        </label>
      </div>
      <div className="mb-4">
        <a
          htmlFor="comment"
          className="block text-gray-700 text-sm font-Lato font-bold mb-2 hover:underline w-fit"
          href="/">
          Add comment
        </a>
      </div>
      <button
        type="submit"
        className="w-full bg-lime-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-700 transition duration-300">
        Donate and Support
      </button>
    </div>
  );
};

export default DonationCard;

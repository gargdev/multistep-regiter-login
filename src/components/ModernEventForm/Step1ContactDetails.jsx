import React, { useState } from "react";
import { User, Mail, Phone, Building2 } from 'lucide-react';

const InputWithIcon = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
      <Icon size={20} />
    </div>
    <input
      {...props}
      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
    />
  </div>
);

const Step1ContactDetails = ({ formData, onNext }) => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    ...formData
  });

  const handleChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-[#1D1B20]">Contact details</h3>
        <p className="text-gray-500 mt-1">Give your contact details</p>
      </div>
      <div className="space-y-4">
        <InputWithIcon
          icon={User}
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={data.fullName}
          onChange={handleChange}
        />
        <InputWithIcon
          icon={Mail}
          type="email"
          name="email"
          placeholder="Email address"
          value={data.email}
          onChange={handleChange}
        />
        <InputWithIcon
          icon={Phone}
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={data.phoneNumber}
          onChange={handleChange}
        />
        <InputWithIcon
          icon={Building2}
          type="text"
          name="company"
          placeholder="Company name"
          value={data.company}
          onChange={handleChange}
        />
      </div>
      <button
        onClick={() => onNext(data)}
        className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition duration-300 mt-6"
      >
        Next step
      </button>
    </div>
  );
};

export default Step1ContactDetails;


import React from "react";
import { Check } from 'lucide-react';

const Step4ReviewSubmit = ({ formData, onPrev, onSubmit, isSubmitting, submitError }) => {
  return (
    <div className="space-y-6 text-center">
      <div className="flex justify-center">
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
          <Check className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold text-[#1D1B20]">Submit your event request</h3>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          Please review all the information you previously typed in the past steps, 
          and if all is okay, submit your message to receive a event proposal in 24 - 48 hours.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl mt-8 text-left">
        <h4 className="font-medium text-gray-900 mb-4">Event Details</h4>
        <dl className="space-y-4">
          <div>
            <dt className="text-sm text-gray-500">Contact Information</dt>
            <dd className="mt-1">
              <p className="text-gray-900">{formData.fullName}</p>
              <p className="text-gray-900">{formData.email}</p>
              <p className="text-gray-900">{formData.phoneNumber}</p>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-gray-500">Event Type</dt>
            <dd className="mt-1 text-gray-900">{formData.eventType}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-500">Event Date</dt>
            <dd className="mt-1 text-gray-900">
              {formData.dateType === 'single' 
                ? (formData.startDate ? new Date(formData.startDate).toLocaleDateString() : 'Not specified')
                : `${new Date(formData.startDate).toLocaleDateString()} - ${new Date(formData.endDate).toLocaleDateString()}`
              }
            </dd>
          </div>
          <div>
            <dt className="text-sm text-gray-500">Number of Guests</dt>
            <dd className="mt-1 text-gray-900">{formData.guestCount}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-500">Budget Range</dt>
            <dd className="mt-1 text-gray-900">{formData.budget}</dd>
          </div>
        </dl>
      </div>

      {submitError && (
        <div className="text-red-500 mt-4">
          {submitError}
        </div>
      )}

      <div className="flex justify-between mt-8">
        <button
          onClick={onPrev}
          className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-50 transition duration-300"
          disabled={isSubmitting}
        >
          Previous step
        </button>
        <button
          onClick={onSubmit}
          className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default Step4ReviewSubmit;


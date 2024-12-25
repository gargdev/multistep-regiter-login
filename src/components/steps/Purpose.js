import React from "react";
import customerimg from "../../assets/undraw_special_event_-4-aj8 1.png";
import managerimg from "../../assets/undraw_team_work_k-80-m 1@2x.png";

export default function Purpose({ onNext }) {
  const handlePurposeSelection = (purpose) => {
    onNext({ purpose });
  };

  return (
    <div className="space-y-6 py-4">
      <div className="flex flex-col items-center text-center justify-center space-y-2">
        <h2 className="text-2xl text-black font-semibold w-96">
          Your account has been created! What brings you to GoPratle?
        </h2>
        <p className="text-orange-500 font-semibold py-6">
          We want to tailor your experience so you'll feel right at home.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          { id: "plan", title: "Plan an event.", image: customerimg },
          { id: "organize", title: "Organize an event.", image: managerimg },
        ].map((option) => (
          <button
            key={option.id}
            onClick={() => handlePurposeSelection(option.id)}
            className="group rounded-lg border-2 border-orange-200 p-6 transition-all hover:border-orange-500"
          >
            <div className="flex flex-col text-left items-start gap-4 w-full">
              <img
                src={option.image}
                alt={option.title}
                className="h-20 w-20"
              />
              <h3 className="text-xl w-full font-semibold text-orange-500">
                {option.title}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

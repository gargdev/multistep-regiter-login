import React from "react";
import volunteerimg from "../../assets/VOLNTR.png";
import managerimg from "../../assets/MANGER.png";
import agencyimg from "../../assets/AGENCY.png";
export default function Role({ onNext, onSkip, onPrev }) {
  const handleRoleSelection = (role) => {
    onNext({ role });
  };

  return (
    <div className="space-y-6 py-4">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">What describe you best!</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { id: "volunteer", title: "Volunteer", image: volunteerimg },
          { id: "event-manager", title: "Event Manager", image: managerimg },
          { id: "event-agency", title: "Event Agency", image: agencyimg },
        ].map((role) => (
          <button
            key={role.id}
            onClick={() => handleRoleSelection(role.id)}
            className="group rounded-lg border-2 border-orange-200 p-6 transition-all hover:border-orange-500"
          >
            <div className="flex flex-col text-left items-start gap-4 w-full">
              <img src={role.image} alt={role.title} className="h-24 w-24" />
              <h3 className="text-lg font-semibold">{role.title}</h3>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-end gap-5 mr-5">
        <button onClick={onPrev} className="text-orange-500 hover:underline">
          Previous
        </button>
        <button onClick={onSkip} className="text-orange-500 hover:underline">
          Skip →
        </button>
      </div>
    </div>
  );
}

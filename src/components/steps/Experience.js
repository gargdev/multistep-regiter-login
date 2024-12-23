import React from 'react';
import beginrimg from "../../assets/undraw_fall_thyk 1.png"
import intermediateimg from "../../assets/undraw_people_re_8spw 1.png"
import individualimg from "../../assets/undraw_everyday_design_gy64 1.png"
import agencyimg from "../../assets/AGENCY.png"
export default function Experience({ onNext, onSkip, onPrev }) {
  const handleExperienceSelection = (experience) => {
    onNext({ experience });
  };

  return (
    <div className="space-y-6 py-4">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">What's your experience in the event industry?</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          { id: 'getting-started', title: "I'm getting started", image: beginrimg },
          { id: 'intermediate', title: 'Intermediate', image: intermediateimg },
          { id: 'corporate', title: 'Corporate Individual', image: individualimg },
          { id: 'full-time-agency', title: 'Full Time Agency', image:agencyimg }
        ].map((level) => (
          <button
            key={level.id}
            onClick={() => handleExperienceSelection(level.id)}
            className="group rounded-lg border-2 border-orange-200 p-6 transition-all hover:border-orange-500"
          >
            <div className="flex flex-col text-left items-start gap-4 w-full">
              <img src={level.image} alt={level.title} className="h-24 w-24" />
              <h3 className="text-lg font-semibold">{level.title}</h3>
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

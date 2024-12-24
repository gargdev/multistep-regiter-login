import React from 'react';

export default function Completion({ data, onPrev }) {
  return (
    <div className="space-y-6 py-4">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Great! You're Almost there. Here's what's next:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div className="space-y-4">
        <ol className="list-decimal space-y-2 pl-4">
          <li>Complete your agency portfolio.</li>
          <li>Create your events and packages.</li>
          <li>Publish and look for events in your area.</li>
        </ol>
      </div>
      <div className="flex gap-4">
        <button className="flex-1 rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
          Complete your portfolio
        </button>
        <button className="flex-1 rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50">
          Start exploring
        </button>
      </div>
      <div className="flex justify-end">
        <button className="text-orange-500 hover:underline">
          Dashboard →
        </button>
      </div>
    </div>
  );
}

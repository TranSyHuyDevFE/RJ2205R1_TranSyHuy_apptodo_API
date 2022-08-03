import React from "react";

export default function Loading() {
  return (
    <div>
      <div
        className="spinner-border position-absolute top-50 start-50"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

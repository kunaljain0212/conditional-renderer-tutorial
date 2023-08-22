import React from "react";

function ConditionalRenderer({ isVisible, children }) {
  return <>{isVisible && children}</>;
}

export default ConditionalRenderer;

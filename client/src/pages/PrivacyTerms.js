import React from "react";

import Terms from "../assets/images/privacystatement.pdf";

const PrivacyTerms = () => {
  return (
    <main>
      <iframe src={Terms} width="100%" height="auto"></iframe>
    </main>
  );
};

export default PrivacyTerms;

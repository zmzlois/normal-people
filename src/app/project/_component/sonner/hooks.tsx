import React from "react";

export const useIsDocumentHidden = () => {
  const [isDocumentHidden, setIsDocumentHidden] = React.useState(false);

  React.useEffect(() => {
    const callback = () => {
      // use browser's built in API to hide toaster
      setIsDocumentHidden(document.hidden);
    };
    document.addEventListener("visibilitychange", callback);

    return () => window.removeEventListener("visibilitychange", callback);
  });

  return isDocumentHidden;
};

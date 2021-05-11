import { useLayoutEffect } from "react";

const useDocumentTitle = (title: string) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "meetup | Social Network for developers";
    }
  }, [title]);
};

export default useDocumentTitle;

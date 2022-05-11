import { Fragment } from "react";

import BookShopSummary from "./BookShopSummary";
import AvailableBooks from "./AvailableBooks";

const Books = () => {
  return (
    <Fragment>
      <BookShopSummary />
      <AvailableBooks />
    </Fragment>
  );
};

export default Books;

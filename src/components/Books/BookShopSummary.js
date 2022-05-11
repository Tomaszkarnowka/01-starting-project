import classes from "./BookShopSummary.module.css";

const BookShopSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Best Manga, Delivered To You</h2>
      <p>
        Choose your favorite Manga from our broad selection of available Manga's
        and enjoy it.
      </p>
      <p>All our Manga's have a certificate of authenticity</p>
    </section>
  );
};

export default BookShopSummary;

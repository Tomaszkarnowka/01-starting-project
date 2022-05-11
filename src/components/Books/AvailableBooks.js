import { useEffect, useState } from "react";
import React from "react";
import Card from "../UI/Card";
import ShopItem from "./ShopItem/ShopItem";
import classes from "./AvailableBooks.module.css";

const AvailableBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        "https://book-shop-4c078-default-rtdb.firebaseio.com/books.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedBooks = [];
      for (const key in responseData) {
        loadedBooks.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          author: responseData[key].author,
        });
      }

      setBooks(loadedBooks);
      setIsLoading(false);
    };

    fetchBooks().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.BooksLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.BooksError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const booksList = books.map((books) => (
    <ShopItem
      key={books.id}
      id={books.id}
      name={books.name}
      description={books.description}
      price={books.price}
      author={books.author}
    />
  ));

  return (
    <section className={classes.books}>
      <Card>
        <ul>{booksList}</ul>
      </Card>
    </section>
  );
};

export default AvailableBooks;

import React from "react";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import AddTodo from "../components/AddTodo/AddTodo";
import ListTodo from "../components/List_todo/ListTodo";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <Container>
      <Header />
      <AddTodo />
      <ListTodo />
      <Footer />
    </Container>
  );
}

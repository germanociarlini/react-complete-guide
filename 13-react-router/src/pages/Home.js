import React from "react";
import { Route } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <Route path="/home/new-user">
        <p>Welcome, New User</p>
      </Route>
    </section>
  );
}

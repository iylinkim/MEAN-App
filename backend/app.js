const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fa7878",
      title: "First server-side post",
      content: "This is coming from the server",
    },
    {
      id: "djdj99833",
      title: "Second server-side post",
      content: "This is coming from the server",
    },
  ];
  res.status(200).json({
      messge: "Posts fetched succesfully",
      posts
  });
});

module.exports = app;

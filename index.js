const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Helllo");
});
app.get("/books", function (req, res) {
  let books = {
    To_Paradise:
      "To Paradise is a fin de siecle novel of marvelous literary effect, but above all it is a work of emotional genius.  The great power of this remarkable novel is driven by Yanagihara’s understanding of the aching desire to protect those we love—partners, lovers, children, friends, family and even our fellow citizens—and the pain that ensues when we cannot.",
    Pure_Colour:
      "In this first draft of the world, a woman named Mira leaves home to study. There, she meets Annie, whose tremendous power opens Mira’s chest like a portal―to what, she doesn’t know. When Mira is older, her beloved father dies, and his spirit passes into her. Together, they become a leaf on a tree. But photosynthesis gets boring, and being alive is a problem that cannot be solved, even by a leaf. Eventually, Mira must remember the human world she’s left behind, including Annie, and choose whether or not to return",
    Young_Mungo: "A story of queer love and working-class families, ",
    The_Books_of_Jacob:
      "Sophisticated and ribald and brimming with folk wit. . . The comedy in this novel blends, as it does in life, with genuine tragedy.” –Dwight Garner, The New York Times",
  };
  res.send(JSON.stringify(books));
});

app.listen(3000, function () {
  console.log("listning to the port 3000");
});

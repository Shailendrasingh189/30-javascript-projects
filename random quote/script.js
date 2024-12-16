let quotesData = "";

const colors = [
  "#16a085", // dark greem
  "#FF5733", // Red-Orange
  "#3357FF", // Blue
  "#F1C40F", // Yellow
  "#8E44AD", // Purple
  "#E74C3C", // Red
  "#1ABC9C", // Teal
  "#F39C12", // Orange
  "#2ECC71", // Light Green
  "#3498DB", // Light Blue
];

const getQuotes = () => {
  return $.ajax({
    headers: {
      Accept: "application/json",
    },
    url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    success: function (response) {
      quotesData = JSON.parse(response);
      console.log(quotesData);
    },
  });
};

const fadeOutFn = (selector, id, newText) => {
  $(selector).animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $(id).text(newText);
  });
};

const getRandomQuote = () => {
  return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
  ];
};

const getQuote = () => {
  let randomQuote = getRandomQuote();
  let quote = randomQuote.quote;
  let author = randomQuote.author;
  console.log(quote, author);

  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
      encodeURIComponent('"' + quote + '" ' + author)
  );

  fadeOutFn(".quote-author", "#author", author);

  fadeOutFn(".quote-text", "#text", quote);
  let color = Math.floor(Math.random() * colors.length);
  console.log(color);
  $("html body").animate(
    {
      backgroundColor: colors[color],
      color: colors[color],
    },
    1000
  );
  $(".button").animate({
    backgroundColor: colors[color],
  });
};

$(document).ready(async function () {
  await getQuotes();
  getQuote();
  $("#new-quote").on("click", getQuote);
});

const formatCurrency = (country, type) => (amout) =>
  new Intl.NumberFormat(country, {
    style: "currency",
    currency: type,
  }).format(amout);

console.log(formatCurrency("my-mm", "MMK")(5000));

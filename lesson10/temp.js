function moviePermission(age, parentalConsent) {
  if (age > 15 || parentalConsent) {
    return "Możesz oglądać film.";
  } else {
    return "Nie możesz oglądać filmu.";
  }
}
console.log(moviePermission(14, false));

import guess from "@bredele/guess-email";

/**
 * Return email pattern if known, otherwise undefined.
 * @notes we will assume email, first and last name are valid and not empty strings.
 */

export default (
  email: string,
  firstName: string,
  lastName: string
): string | void => {
  email = email.toLowerCase();
  const matches = guess(email.split("@")[1], firstName, lastName);
  for (const { pattern, value } of matches) {
    if (email === value) return pattern;
  }
};

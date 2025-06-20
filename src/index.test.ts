import test from "node:test";
import assert from "node:assert";
import getPattern from ".";

test("detects first.last pattern", () => {
  assert.strictEqual(
    getPattern("john.doe@example.com", "John", "Doe"),
    "first.last"
  );
});

test("detects firstlast pattern", () => {
  assert.strictEqual(
    getPattern("johndoe@example.com", "John", "Doe"),
    "firstlast"
  );
});

test("detects flast pattern", () => {
  assert.strictEqual(getPattern("jdoe@example.com", "John", "Doe"), "flast");
});

test("detects f.last pattern", () => {
  assert.strictEqual(getPattern("j.doe@example.com", "John", "Doe"), "f.last");
});

test("detects first pattern", () => {
  assert.strictEqual(getPattern("john@example.com", "John", "Doe"), "first");
});

test("detects first_last pattern", () => {
  assert.strictEqual(
    getPattern("john_doe@example.com", "John", "Doe"),
    "first_last"
  );
});

test("detects last.first pattern", () => {
  assert.strictEqual(
    getPattern("doe.john@example.com", "John", "Doe"),
    "last.first"
  );
});

test("detects lastfirst pattern", () => {
  assert.strictEqual(
    getPattern("doejohn@example.com", "John", "Doe"),
    "lastfirst"
  );
});

test("detects firstl pattern", () => {
  assert.strictEqual(getPattern("johnd@example.com", "John", "Doe"), "firstl");
});

test("detects first.l pattern", () => {
  assert.strictEqual(
    getPattern("john.d@example.com", "John", "Doe"),
    "first.l"
  );
});

test("detects lastf pattern", () => {
  assert.strictEqual(getPattern("doej@example.com", "John", "Doe"), "lastf");
});

test("detects last.f pattern", () => {
  assert.strictEqual(getPattern("doe.j@example.com", "John", "Doe"), "last.f");
});

test("detects last pattern", () => {
  assert.strictEqual(getPattern("doe@example.com", "John", "Doe"), "last");
});

test("detects f.l pattern", () => {
  assert.strictEqual(getPattern("j.d@example.com", "John", "Doe"), "f.l");
});

test("detects f_last pattern", () => {
  assert.strictEqual(getPattern("j_doe@example.com", "John", "Doe"), "f_last");
});

test("detects first_l pattern", () => {
  assert.strictEqual(
    getPattern("john_d@example.com", "John", "Doe"),
    "first_l"
  );
});

test("detects f_l pattern", () => {
  assert.strictEqual(getPattern("j_d@example.com", "John", "Doe"), "f_l");
});

test("detects last_first pattern", () => {
  assert.strictEqual(
    getPattern("doe_john@example.com", "John", "Doe"),
    "last_first"
  );
});

test("detects last_f pattern", () => {
  assert.strictEqual(getPattern("doe_j@example.com", "John", "Doe"), "last_f");
});

test("detects l_first pattern", () => {
  assert.strictEqual(
    getPattern("d_john@example.com", "John", "Doe"),
    "l_first"
  );
});

test("detects lfirst pattern", () => {
  assert.strictEqual(getPattern("djohn@example.com", "John", "Doe"), "lfirst");
});

test("detects l.first pattern", () => {
  assert.strictEqual(
    getPattern("d.john@example.com", "John", "Doe"),
    "l.first"
  );
});

test("detects lf pattern", () => {
  assert.strictEqual(getPattern("dj@example.com", "John", "Doe"), "lf");
});

test("detects l.f pattern", () => {
  assert.strictEqual(getPattern("d.j@example.com", "John", "Doe"), "l.f");
});

test("detects first-last pattern", () => {
  assert.strictEqual(
    getPattern("john-doe@example.com", "John", "Doe"),
    "first-last"
  );
});

test("detects f-last pattern", () => {
  assert.strictEqual(getPattern("j-doe@example.com", "John", "Doe"), "f-last");
});

test("detects first-l pattern", () => {
  assert.strictEqual(
    getPattern("john-d@example.com", "John", "Doe"),
    "first-l"
  );
});

test("detects f-l pattern", () => {
  assert.strictEqual(getPattern("j-d@example.com", "John", "Doe"), "f-l");
});

test("detects last-first pattern", () => {
  assert.strictEqual(
    getPattern("doe-john@example.com", "John", "Doe"),
    "last-first"
  );
});

test("detects last-f pattern", () => {
  assert.strictEqual(getPattern("doe-j@example.com", "John", "Doe"), "last-f");
});

test("detects l-first pattern", () => {
  assert.strictEqual(
    getPattern("d-john@example.com", "John", "Doe"),
    "l-first"
  );
});

test("detects l-f pattern", () => {
  assert.strictEqual(getPattern("d-j@example.com", "John", "Doe"), "l-f");
});

test("detects l_f pattern", () => {
  assert.strictEqual(getPattern("d_j@example.com", "John", "Doe"), "l_f");
});

test("handles case insensitive matching", () => {
  assert.strictEqual(
    getPattern("JOHN.DOE@example.com", "john", "doe"),
    "first.last"
  );

  assert.strictEqual(
    getPattern("JOHN.DOE@example.com", "John", "Doe"),
    "first.last"
  );
  assert.strictEqual(
    getPattern("john.doe@example.com", "JOHN", "DOE"),
    "first.last"
  );
});

test("returns undefined for no match", () => {
  assert.strictEqual(
    getPattern("randomstring@example.com", "John", "Doe"),
    undefined
  );
});

// test("returns undefined for invalid input", () => {
//   assert.strictEqual(getPattern("", "John", "Doe"), undefined);
//   assert.strictEqual(getPattern("john@example.com", "", "Doe"), undefined);
//   assert.strictEqual(getPattern("john@example.com", "John", ""), undefined);
// });

// test("returns undefined for email without @ symbol", () => {
//   assert.strictEqual(getPattern("johndoe", "John", "Doe"), undefined);
// });

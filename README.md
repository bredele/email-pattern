# email-pattern

Return pattern used by a given email address considering the user's first and last name

## Installation

```sh
npm install @bredele/email-pattern
```

## Usage

```ts
import pattern from "@bredele/email-pattern";

pattern("john.doe@example.com", "John", "Doe");
// => first.last

pattern("johnd@example.com", "John", "Doe");
// => firstl

pattern("john.mitch@example.com", "John", "Doe");
// => undefined
```

See [test suite](./src/index.test.ts) for all supported patterns.

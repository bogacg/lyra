function formatJSON(input: object) {
  return JSON.stringify(input, null, 2);
}

export const INVALID_SCHEMA_TYPE = (type: string) =>
  `Invalid schema type. Expected string or object, but got ${type}`;
export const INVALID_DOC_SCHEMA = (expected: object, found: object) =>
  `Invalid document structure. \nClass has been initialized with the following schema: \n\n${formatJSON(
    expected
  )}\n\nbut found the following doc:\n\n${formatJSON(found)}`;

export const INVALID_PROPERTY = (name: string, expected: string[]) =>
  `Invalid property name. Expected a wildcard string ("*") or array containing one of the following properties: ${expected.join(
    ", "
  )}, but got: ${name}`;
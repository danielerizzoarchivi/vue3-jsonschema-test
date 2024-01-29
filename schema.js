export const schema = {
    title: "Test form",
    type: "object",
    properties: {
      name: {
        type: "string",
        title: "Nome",
      },
      age: {
        "title":"Età",
        type: "number"
      },
      test_boolean: {
        "title":"Prova dato booleano",
        type: "boolean"
      },
    }
  };

export const uiSchema = {
    'ui:width': {
        width: '50%',
    }
}
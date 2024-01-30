export const schema = {
  title: "Test form",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Nome",
    },
    age: {
      "title": "Età",
      type: "number"
    },
    test_boolean: {
      "title": "Prova dato booleano",
      type: "boolean"
    },
  },
  required: ["name"]
};

export const uiSchema = {

  age: {
    'err:required': 'campo obbligatorio',
    'ui:options': {
      placeholder: "età",
      //rules: [
//
  ///    ],
    },
    //'ui:hidden': true,
    //'ui:disabled': true,
    //'ui:readonly': true,
    //   'ui:width': {
    //     width: '50%'
    // }
  }
}

export const errorSchema = {
  name: {
    'err:options': {
      required: 'campo obbligatorio'
    }
  },
}
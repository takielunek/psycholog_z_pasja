export const modal = [
  {
    id: "1",
    title: "Imię i nazwisko",
    placeholder: "Wpisz imię i nazwisko",
    errorMessage: "Wpisz imię i nazwisko",
    type: "text",
    valueName: "name",
    validation: {
      minLength: {
        value: 3,
      },
    },
  },
  {
    id: "2",
    title: "E-mail",
    placeholder: "Wpisz swój adres e-mail",
    errorMessage: "Wpisz swój adres e-mail",
    type: "text",
    valueName: "email",
    validation: {
      pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    },
  },
  {
    id: "3",
    title: "Telefon",
    placeholder: "Wpisz swój numer telefonu",
    errorMessage: "Wpisz swój numer telefonu",
    type: "tel",
    valueName: "phone",
    validation: {
      pattern: {
        value: /^\d{9}$/,
      },
    },
  },
];

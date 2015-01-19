$(function () {
  const REGEX_EMAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  $('#example').selectize({
    plugins: ['add_multiple'],
    create: function (input) {
      console.log(input);
      if (REGEX_EMAIL.test(input)) {
        var option = {
          value: input,
          text: input
        };
        return option;
      } else {
        return false;
      }

    },
    createFilter: function (input) {
      return REGEX_EMAIL.test(input);
    }
  });
});
Selectize.define('add_multiple', function (options) {

  var self = this,
    config = {
      separateBy: /[ ,;\(\)<>"']+/
    };

  $.extend(config, options);

  this.setup = (function () {
    var original = self.setup;
    return function () {
      var items = [];
      original.apply(this, arguments);

      this.$control_input.on('paste', function (e) {
        setTimeout(function () {
          items = $(e.currentTarget).val()
            .split(config.separateBy)
            .map(function (item) {
              return item.trim();
            })
            .forEach(function (item) {
              if (!item) return;
              self.$control_input.val('');
              self.addOption({
                value: item,
                text: item
              });
              self.addItem(item);
            });
        }, 0);
      });
    };
  })();
});

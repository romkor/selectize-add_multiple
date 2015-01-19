Selectize.define('add_multiple', function (options) {

  var self = this,
    config = {
      separateBy: /[ ,;\(\)<>"']+/
    };

  $.extend(config, options);

  this.setup = (function () {
    var original = self.setup;

    return function () {
      original.apply(this, arguments);

      this.$control_input.on('paste', function (e) {
        setTimeout(function () {
          $(e.currentTarget).val()
            .split(config.separateBy)
            .filter(function (item) {
              var createFilter = self.settings.createFilter;

              if (createFilter == null) return true;
              return createFilter(item);
            })
            .forEach(function (item) {
              if (!item) return;

              self.addOption({
                value: item,
                text: item
              });

              self.addItem(item);
            });
          // Clear user input
          self.$control_input.val('');
        }, 0);
      });
    };
  })();
});

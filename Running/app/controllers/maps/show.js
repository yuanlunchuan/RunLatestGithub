var args = arguments[0]||
{
};

var Map =
{
  Show:
  {
  }
};

var self = Map.Show;

Map.Show.Const =
{
};

Map.Show.View =
{
  window: null,

  initView: function()
  {
    self.View.window = $.window;
  },

  initialize: function()
  {
    self.View.initView();
  }
};

Map.Show.Controller =
{
  onWindowClicked: function(event)
  {
    self.Controller.close();
  },

  open: function()
  {
    self.View.window.open();
    self.View.window.addEventListener('click', self.Controller.onWindowClicked);
  },

  close: function()
  {
    self.View.window.close();
  },

  initialize: function()
  {
    self.View.initialize();

    return self;
  }
};

Map.Show.Controller.initialize().Controller.open();

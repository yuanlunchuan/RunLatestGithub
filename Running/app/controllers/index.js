var args = arguments[0]||
{
};

var Index =
{
  Const:
  {
    WIN_TITLE: '启动页--跑步打卡'
  },
  View:
  {
    mainWin: $.indexWin,
    findShowLabel: $.findShowLabel,
    runningByCardLabel: $.runningByCardLabel
  },
  Var:
  {
  },
  Controller:
  {
  }
};
var self = Index;

self.Controller =
{
  onAndroidBackClicked: function()
  {
    self.View.mainWin.close();
  },

  onRunningByCardLabelClicked: function()
  {
    Alloy.createController('menu/index',
    {
    });
    self.View.mainWin.close();
  },

  onWindowClosed: function()
  {
    $.off();
    $.destroy();

    self.View.mainWin.removeAllChildren();
    delete self;
  },

  addEvent: function()
  {
    self.View.runningByCardLabel.addEventListener('click', self.Controller.onRunningByCardLabelClicked);
  },

  open: function()
  {
    self.View.mainWin.open();
  },

  initialize: function()
  {
    self.Controller.open();
    self.Controller.addEvent();
  },
};

self.Controller.initialize();

var args = arguments[0]||
{
};

var Menu =
{
  Index:
  {
    Const:
    {
      WIN_TITLE: '选择用户的身份'
    },
    View:
    {
      mainWin: $.menuIndexWin,
      registerLabel: $.registerLabel,
      experienceByVisitorLabel: $.experienceByVisitorLabel
    },
    Var:
    {
    },
    Controller:
    {
    }
  }
};
var self = Menu.Index;

self.Controller =
{
  onRegisterLabelClicked: function()
  {
    Alloy.createController('register/register',
    {
    });
  },

  onFindShowLabelClicked: function()
  {
    Alloy.createController("tab_groups/index",
    {
    });
  },

  onWindowClosed: function()
  {
    $.off();
    $.destroy();

    self.View.mainWin.removeAllChildren();
    delete self;
  },

  onRunningByCardLabelClicked: function(event)
  {
    Alloy.createController("tab_groups/index",
    {
    });
  },

  addEvent: function()
  {
    self.View.registerLabel.addEventListener('click', self.Controller.onRegisterLabelClicked);
    //self.View.runningByCardLabel.addEventListener('click', self.Controller.onRunningByCardLabelClicked);
    $.experienceByVisitorLabel.addEventListener('click', function(event)
    {
      Alloy.createController("tab_groups/index",
      {
      });
      $.menuIndexWin.close();
    });
  },

  initialize: function()
  {
    $.menuIndexWin.open();
    self.Controller.addEvent();
  },
};

self.Controller.initialize();

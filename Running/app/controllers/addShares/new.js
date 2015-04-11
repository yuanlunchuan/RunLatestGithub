var args = arguments[0]||
{
};

var AddShares =
{
  New:
  {
  }
};

var self = AddShares.New;

AddShares.New.Const =
{
};

AddShares.New.Var =
{
  switchState: true
};

AddShares.New.View =
{
  window: null,
  backImg: null,
  runnerImage: null,
  addMoreImage: null,
  showRunningDataSwitch: null,

  initView: function()
  {
    self.View.window = $.window;
    self.View.backImg = $.backImg;
    self.View.runnerImage = $.runnerImage;
    self.View.addMoreImage = $.addMoreImage;
    self.View.showRunningDataSwitch = $.showRunningDataSwitch;
  },

  initialize: function()
  {
    self.View.initView();
  },
};

AddShares.New.Controller =
{
  onBackImgClicked: function(event)
  {
    self.View.window.close();
  },

  onRunnerImageClicked: function()
  {
    Alloy.createController("addShares/show",
    {
    });
  },

  onAddMoreImageClicked: function()
  {

  },

  onShowRunningDataSwitchClicked: function()
  {
    if (self.Var.switchState)
    {
      self.View.showRunningDataSwitch.image = "/images/blackButton.png";
      self.Var.switchState = false;
    }
    else
    {
      self.View.showRunningDataSwitch.image = "/images/greenButton.png";
      self.Var.switchState = true;
    }
  },

  onWindowClosed: function()
  {
    self.View.backImg.removeEventListener('click', self.Controller.onBackImgClicked);
    self.View.runnerImage.removeEventListener('click', self.Controller.onRunnerImageClicked);
    self.View.addMoreImage.removeEventListener('click', self.Controller.onAddMoreImageClicked);
    self.View.showRunningDataSwitch.removeEventListener('click', self.Controller.onShowRunningDataSwitchClicked);
    self.View.window.removeEventListener('close', self.Controller.onWindowClosed);
  },

  open: function()
  {
    self.View.window.open();
    self.View.backImg.addEventListener('click', self.Controller.onBackImgClicked);
    self.View.runnerImage.addEventListener('click', self.Controller.onRunnerImageClicked);
    self.View.addMoreImage.addEventListener('click', self.Controller.onAddMoreImageClicked);
    self.View.showRunningDataSwitch.addEventListener('click', self.Controller.onShowRunningDataSwitchClicked);
    self.View.window.addEventListener('close', self.Controller.onWindowClosed);
  },

  close: function()
  {
    self.View.window.close();
  },

  initialize: function()
  {
    self.View.initialize();

    return self;
  },
};

AddShares.New.Controller.initialize().Controller.open();

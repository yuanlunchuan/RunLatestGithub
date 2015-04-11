var args = arguments[0]||
{
};

var outRunning =
{
  Show:
  {
  }
};

var self = outRunning.Show;

outRunning.Show.Const =
{
};

outRunning.Show.View =
{
  window: null,
  unlockImageView: null,
  lockImageView: null,
  operatorButton: null,
  operatorImageView: null,
  runnerCardLabel: null,
  photoImage: null,

  initView: function()
  {
    self.View.window = $.window;
    self.View.unlockImageView = $.unlockImageView;
    self.View.lockImageView = $.lockImageView;
    self.View.operatorButton = $.operatorButton;
    self.View.operatorImageView = $.operatorImageView;
    self.View.runnerCardLabel = $.runnerCardLabel;
    self.View.photoImage = $.photoImage;
  },

  initialize: function()
  {
    self.View.initView();
  }
};

outRunning.Show.Controller =
{
  startRunning: false,

  onUnlockImageViewClicked: function(event)
  {
    self.Controller.close();
  },

  onLockImageViewClicked: function(event)
  {
    Alloy.createController('maps/show',
    {
    });
  },

  onOperatorButtonClicked: function(event)
  {
    if (self.Controller.startRunning)
    {
      self.View.operatorButton.backgroundColor = "#f00";
      self.View.operatorImageView.image = "/images/triangle-icon.png";
      self.Controller.startRunning = false;
      self.View.photoImage.show();
      self.View.runnerCardLabel.hide();
      self.View.unlockImageView.show();
      self.View.lockImageView.hide();
    }
    else
    {
      self.View.operatorButton.backgroundColor = "#999";
      self.View.operatorImageView.image = "/images/pause-icon.png";
      self.Controller.startRunning = true;
      self.View.photoImage.hide();
      self.View.runnerCardLabel.show();
      self.View.unlockImageView.hide();
      self.View.lockImageView.show();
    }
  },

  open: function()
  {
    self.View.window.open();
    self.View.unlockImageView.addEventListener('click', self.Controller.onUnlockImageViewClicked);
    self.View.lockImageView.addEventListener('click', self.Controller.onLockImageViewClicked);
    self.View.operatorButton.addEventListener('click', self.Controller.onOperatorButtonClicked);
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

outRunning.Show.Controller.initialize().Controller.open();

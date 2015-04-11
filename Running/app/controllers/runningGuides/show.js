var runningGuides =
{
  Show:
  {
  }
};

var self = runningGuides.Show;

runningGuides.Show.Const =
{
};

runningGuides.Show.View =
{
  window: null,
  countdownLabel: null,
  cancelLabel: null,
  startRunningLabel: null,

  initView: function()
  {
    self.View.window = $.window;
    self.View.countdownLabel = $.countdownLabel;
    self.View.cancelLabel = $.cancelLabel;
    self.View.startRunningLabel = $.startRunningLabel;
  },

  initialize: function()
  {
    self.View.initView();
  },
};

runningGuides.Show.Controller =
{
  remainingTimer: null,

  showCountDown: function()
  {
    var executeTimes = 2;
    self.Controller.remainingTimer = setInterval(function()
    {
      if (executeTimes<=0)
      {
        clearInterval(self.Controller.remainingTimer);
        self.Controller.remainingTimer = null;
        Alloy.createController('outRunning/show',
        {
        });
        self.Controller.close();
        return;
      }
      self.View.countdownLabel.text = executeTimes;
      executeTimes--;
    }, 1000);
  },

  onCancelLabelClicked: function(event)
  {
    self.Controller.close();
  },

  onStartRunningLabelClicked: function(event)
  {
    Alloy.createController('outRunning/show',
    {
    });
    self.Controller.close();
  },

  onWindowClosed: function(event)
  {
    clearInterval(self.Controller.remainingTimer);
    self.Controller.remainingTimer = null;
  },

  open: function()
  {
    self.Controller.showCountDown();
    self.View.window.open();
    self.View.window.addEventListener('close', self.Controller.onWindowClosed);
    self.View.cancelLabel.addEventListener('click', self.Controller.onCancelLabelClicked);
    self.View.startRunningLabel.addEventListener('click', self.Controller.onStartRunningLabelClicked);
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

runningGuides.Show.Controller.initialize().Controller.open();


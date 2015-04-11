var Running =
{
  Show:
  {
  }
};

var self = Running.Show;

Running.Show.Const =
{
};

Running.Show.View =
{
  runningByCardView: null,
  outRunningLabel: null,
  roomRunningLabel: null,
  cancerLabel: null,
  androidDialog: null,
  content: null,
  body: null,

  initView: function()
  {
    self.View.runningByCardView = $.runningByCardView;
    self.View.outRunningLabel = $.outRunningLabel;
    self.View.roomRunningLabel = $.roomRunningLabel;
    self.View.cancerLabel = $.cancerLabel;
    self.View.androidDialog = $.androidDialog;
    self.View.content = $.content;
    self.View.body = $.body;
  },

  initialize: function()
  {
    self.View.initView();
  }
};

Running.Show.Controller =
{
  showDialog: function()
  {
    self.View.androidDialog.show();
    self.View.androidDialog.zIndex = 10;
    self.View.content.zIndex = 0;
  },

  hideDialog: function()
  {
    self.View.androidDialog.hide();
    self.View.androidDialog.zIndex = 0;
    self.View.content.zIndex = 10;
  },

  onRunningByCardViewClicked: function()
  {
    if (OS_ANDROID)
    {
      self.Controller.showDialog();
    }
    if (OS_IOS)
    {
      var optionsDialogOpts =
      {
        options: ['选择跑步方式', '室外跑步', '室外跑步', '取消'],
        cancel: 3
      };

      var dialog = Titanium.UI.createOptionDialog(optionsDialogOpts);
      dialog.addEventListener('click', function(event)
      {
        var clickedIndex = event.index;
        switch(clickedIndex)
        {
          case 1:
            Alloy.createController('outRunning/show',
            {
            });
            break;

          case 2:
            Alloy.createController('outRunning/show',
            {
            });
            break;
        }
      });
      dialog.show();
    }
  },

  onOutRunningLabelClicked: function(event)
  {
    Alloy.createController('outRunning/show',
    {
    });
    self.Controller.hideDialog();
  },

  onRoomRunningLabelClicked: function(event)
  {
    Alloy.createController('outRunning/show',
    {
    });
    self.Controller.hideDialog();
  },

  onCancerLabelClicked: function()
  {
    self.Controller.hideDialog();
  },

  onBodyClicked: function(event)
  {
    if (OS_IOS)
    {
      return;
    }
    if ("androidDialog"===event.source.id)
    {
      self.Controller.hideDialog();
    }
  },

  open: function()
  {
    self.View.runningByCardView.addEventListener('click', self.Controller.onRunningByCardViewClicked);
    self.View.outRunningLabel.addEventListener('click', self.Controller.onOutRunningLabelClicked);
    self.View.roomRunningLabel.addEventListener('click', self.Controller.onRoomRunningLabelClicked);
    self.View.cancerLabel.addEventListener('click', self.Controller.onCancerLabelClicked);
    self.View.body.addEventListener('click', self.Controller.onBodyClicked);
  },

  close: function()
  {
  },

  initialize: function()
  {
    self.View.initialize();

    return self;
  }
};

Running.Show.Controller.initialize().Controller.open();


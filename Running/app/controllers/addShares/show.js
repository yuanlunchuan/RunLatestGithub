var args = arguments[0]||
{
};

var AddShares =
{
  Show:
  {
  }
};

var self = AddShares.Show;

AddShares.Show.Const =
{
};

AddShares.Show.Var =
{
  runnerImgMap: null,
  totalImgNumber: null,
  curImgNumber: 0,
  imageClickedCount: 0
};

AddShares.Show.View =
{
  window: null,
  backImg: null,
  curImgNumberLabel: null,
  totalImgNumberLabel: null,
  deleteImg: null,
  runnerImage: null,

  initView: function()
  {
    self.View.window = $.window;
    self.View.backImg = $.backImg;
    self.View.curImgNumberLabel = $.curImgNumberLabel;
    self.View.totalImgNumberLabel = $.totalImgNumberLabel;
    self.View.deleteImg = $.deleteImg;
    self.View.runnerImage = $.runnerImage;
  },

  initialize: function()
  {
    self.View.initView();
  },
};

AddShares.Show.Controller =
{
  onBackImgClicked: function(event)
  {
    self.View.window.close();
  },

  onDeleteImgClicked: function()
  {
    return;
  },

  getImageMap: function()
  {
    self.Var.runnerImgMap =
    {
      0: "/images/image1.png",
      1: "/images/image2.png",
      2: "/images/image3.png"
    };
  },

  onRunnerImageClicked: function()
  {
    self.Var.imageClickedCount++;
    self.Var.curImgNumber = self.Var.imageClickedCount%self.Var.totalImgNumber;
    self.View.runnerImage.image = self.Var.runnerImgMap[self.Var.curImgNumber];
    self.Controller.updateImageNumber();
  },

  updateImageNumber: function()
  {
    self.Var.totalImgNumber = 3;
    self.View.curImgNumberLabel.text = self.Var.curImgNumber+1;
  },

  onWindowClosed: function()
  {
    self.View.backImg.removeEventListener('click', self.Controller.onBackImgClicked);
    self.View.deleteImg.removeEventListener('click', self.Controller.onDeleteImgClicked);
    self.View.runnerImage.removeEventListener('click', self.Controller.onRunnerImageClicked);
    self.View.window.removeEventListener('close', self.Controller.onWindowClosed);
  },

  open: function()
  {
    self.View.window.open();
    self.View.backImg.addEventListener('click', self.Controller.onBackImgClicked);
    self.View.deleteImg.addEventListener('click', self.Controller.onDeleteImgClicked);
    self.View.runnerImage.addEventListener('click', self.Controller.onRunnerImageClicked);
    self.View.window.addEventListener('close', self.Controller.onWindowClosed);
  },

  close: function()
  {
    self.View.window.close();
  },

  initialize: function()
  {
    self.View.initialize();
    self.Controller.getImageMap();
    self.Controller.updateImageNumber();

    return self;
  },
};

self.Controller.initialize().Controller.open();

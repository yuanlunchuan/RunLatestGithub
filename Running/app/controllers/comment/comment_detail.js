var args = arguments[0]||
{
};

var Find =
{
  CommentDetail:
  {
  }
};

var self = Find.CommentDetail;

Find.CommentDetail.Const =
{
};

Find.CommentDetail.Var =
{
  switchState: true
};

Find.CommentDetail.View =
{
  window: null,
  backImg: null,
  commentScrollView: null,

  initView: function()
  {
    self.View.window = $.window;
    self.View.backImg = $.backImg;
    self.View.commentScrollView = $.commentScrollView;
  },

  initialize: function()
  {
    self.View.initView();
  },
};

Find.CommentDetail.Controller =
{
  onBackImgClicked: function()
  {
    self.View.window.close();
  },

  initCommentView: function()
  {
    for (var i = 0; i<10; i++)
    {
      var commentItemView = Alloy.createController('comment/comment_item').getView();
      self.View.commentScrollView.add(commentItemView);
    }
  },

  onWindowClosed: function()
  {
    self.View.window.removeEventListener('close', self.Controller.onWindowClosed);
    self.View.backImg.removeEventListener('click', self.Controller.onBackImgClicked);
  },

  open: function()
  {
    self.View.window.open();
    self.View.window.addEventListener('close', self.Controller.onWindowClosed);
    self.View.backImg.addEventListener('click', self.Controller.onBackImgClicked);
  },

  close: function()
  {
    self.View.window.close();
  },

  initialize: function()
  {
    self.View.initialize();
    self.Controller.initCommentView();

    return self;
  },
};

self.Controller.initialize().Controller.open();

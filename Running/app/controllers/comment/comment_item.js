var args = arguments[0]||
{
};

var Find =
{
  CommentItem:
  {
  }
};

var self = Find.CommentItem;

Find.CommentItem.Const =
{
};

Find.CommentItem.Var =
{
  switchState: true
};

Find.CommentItem.View =
{
  visitorNameLabel: null,
  commentDateLabel: null,
  commentTimeLabel: null,
  visitorCommentLabel: null,

  initView: function()
  {
    self.View.visitorNameLabel = $.visitorNameLabel;
    self.View.commentDateLabel = $.commentDateLabel;
    self.View.commentTimeLabel = $.commentTimeLabel;
    self.View.visitorCommentLabel = $.visitorCommentLabel;
  },

  initialize: function()
  {
    self.View.initView();
  },
};

Find.CommentItem.Controller =
{
  initialize: function()
  {
    self.View.initialize();

    return self;
  },
};

self.Controller.initialize();

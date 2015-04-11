var args = arguments[0]||
{
};

var Find =
{
  RecommendItem:
  {
  }
};

var self = Find.RecommendItem;

Find.RecommendItem.Const =
{
};

Find.RecommendItem.Var =
{
  switchState: true
};

Find.RecommendItem.View =
{
  body: null,
  recommendLabel: null,
  activityLabel: null,
  competitionLabel: null,
  commentView: null,

  initView: function()
  {
    self.View.body = $.body;
    self.View.recommendLabel = $.recommendLabel;
    self.View.activityLabel = $.activityLabel;
    self.View.competitionLabel = $.competitionLabel;
    self.View.commentView = $.commentView;
  },

  initialize: function()
  {
    self.View.initView();
  },
};

Find.RecommendItem.Controller =
{
  onCommentViewClicked: function(event)
  {
    Alloy.createController("comment/comment_detail",
    {
    });
  },

  open: function()
  {
    self.View.commentView.addEventListener('click', self.Controller.onCommentViewClicked);
  },

  close: function()
  {
  },

  initialize: function()
  {
    self.View.initialize();

    //TODO 硬编码图片
    $.findImageView.image = "/images/find-image"+args.imageIndex%4+".png";

    return self;
  },
};

self.Controller.initialize().Controller.open();

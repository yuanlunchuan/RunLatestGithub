var args = arguments[0]||
{
};

var Finds =
{
  Show:
  {
  },
};

var self = Finds.Show;

Finds.Show.Const =
{
};

Finds.Show.View =
{
  body: null,
  content: null,
  recommendView: null,
  activityView: null,
  competitionView: null,

  recommendLabel: null,
  recommendLine: null,

  activityLabel: null,
  activityLine: null,

  competitionLabel: null,
  competitionLine: null,

  resetAllViewStyle: function()
  {
    self.View.recommendLabel.color = "#000";
    self.View.recommendLine.backgroundColor = "#fff";

    self.View.activityLabel.color = "#000";
    self.View.activityLine.backgroundColor = "#fff";

    self.View.competitionLabel.color = "#000";
    self.View.competitionLine.backgroundColor = "#fff";
  },

  activeView: function(object)
  {
    self.View.resetAllViewStyle();

    var viewId = object+'Line';
    var labelId = object+'Label';

    var view = $.getView(viewId);
    var label = $.getView(labelId);

    label.color = "#25cf44";
    view.backgroundColor = "#25cf44";
  },

  initView: function()
  {
    self.View.body = $.body;
    self.View.content = $.content;
    self.View.recommendView = $.recommendView;
    self.View.activityView = $.activityView;
    self.View.competitionView = $.competitionView;

    self.View.recommendLabel = $.recommendLabel;
    self.View.recommendLine = $.recommendLine;

    self.View.activityLabel = $.activityLabel;
    self.View.activityLine = $.activityLine;

    self.View.competitionLabel = $.competitionLabel;
    self.View.competitionLine = $.competitionLine;
  },

  initialize: function()
  {
    self.View.initView();
  },
};

Finds.Show.Controller =
{
  clearContent: function()
  {
    Ti.API.info('-------------准备清楚数据------');
    for (var i = self.View.content.children.length-1; i>=0; i--)
    {
      Ti.API.info('------------循环清除数据');
      self.View.content.remove(self.View.content.children[i]);
    }
  },

  loadRecommend: function()
  {
    for (var i = 0; i<10; i++)
    {
      self.View.content.add(Alloy.createController('finds/recommend_item',
      {
        imageIndex: i
      }).getView());
    }
  },

  onRecommendViewClicked: function(event)
  {
    self.View.activeView("recommend");
    self.Controller.clearContent();
    for (var i = 0; i<10; i++)
    {
      self.View.content.add(Alloy.createController('finds/recommend_item',
      {
        imageIndex: i
      }).getView());
    }
  },

  onActivityViewClicked: function(event)
  {
    self.View.activeView("activity");
    self.Controller.clearContent();
    self.View.content.add(Alloy.createController('finds/_activity',
    {
    }).getView());
  },

  onCompetitionViewClicked: function(event)
  {
    self.View.activeView("competition");
    self.Controller.clearContent();
    self.View.content.add(Alloy.createController('finds/_competition',
    {
    }).getView());
  },

  open: function()
  {
    self.View.recommendView.addEventListener('click', self.Controller.onRecommendViewClicked);
    self.View.activityView.addEventListener('click', self.Controller.onActivityViewClicked);
    self.View.competitionView.addEventListener('click', self.Controller.onCompetitionViewClicked);
  },

  close: function()
  {
  },

  initialize: function()
  {
    self.View.initialize();
    self.Controller.loadRecommend();

    return self;
  }
};

Finds.Show.Controller.initialize().Controller.open();


var args = arguments[0]||
{
};

var User =
{
  Login:
  {
  }
};
var self = User.Login;

User.Login.Const =
{
  WIN_TITLE: '用户注册'
};

User.Login.View =
{
  window: null,
  userName: null,
  userPwd: null,
  loginLabel: null,
  forgetPwdLabel: null,
  loginByOtherStyle: null,
  backView: null,

  initialize: function()
  {
    self.View.window = $.window;
    self.View.userName = $.userName;
    self.View.userPwd = $.userPwd;
    self.View.loginLabel = $.loginLabel;
    self.View.forgetPwdLabel = $.forgetPwdLabel;
    self.View.loginByOtherStyle = $.loginByOtherStyle;
    self.View.backView = $.backView;
  }
};

User.Login.Controller =
{

  onLoginLabelClicked: function()
  {
    return;
  },

  onForgetPwdLabelClicked: function()
  {
    return;
  },

  onLoginByOtherStyleClicked: function()
  {
    return;
  },

  onWindowClosed: function()
  {
    $.off();
    $.destroy();

    self.View.loginLabel.removeEventListener('click', self.Controller.onLoginLabelClicked);
    self.View.forgetPwdLabel.removeEventListener('click', self.Controller.onForgetPwdLabelClicked);
    self.View.loginByOtherStyle.removeEventListener('click', self.Controller.onLoginByOtherStyleClicked);
    self.View.window.removeEventListener('close', self.Controller.onWindowClosed);

    self.View.window.removeAllChildren();
    delete self;
  },

  onBackViewClicked: function(event)
  {
    self.Controller.close();
  },

  open: function()
  {
    self.View.window.open();
    self.View.loginLabel.addEventListener('click', self.Controller.onLoginLabelClicked);
    self.View.forgetPwdLabel.addEventListener('click', self.Controller.onForgetPwdLabelClicked);
    self.View.loginByOtherStyle.addEventListener('click', self.Controller.onLoginByOtherStyleClicked);
    self.View.window.addEventListener('close', self.Controller.onWindowClosed);
    self.View.backView.addEventListener('click', self.Controller.onBackViewClicked);

    return self;
  },
  close: function()
  {
    self.View.window.close();

    return self;
  },

  initialize: function()
  {
    self.View.initialize();

    return self;
  },
};

self.Controller.initialize().Controller.open();

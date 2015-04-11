var args = arguments[0]||
{
};

var User =
{
  Register:
  {
  }
};
var self = User.Register;

User.Register.Const =
{
  WIN_TITLE: '用户注册'
};

User.Register.View =
{
  window: null,
  userName: null,
  userPwd: null,
  valiCode: null,
  sendValiCodeLabel: null,
  registerLabel: null,
  loginLabel: null,

  initialize: function()
  {
    self.View.window = $.window;
    self.View.userName = $.userName;
    self.View.userPwd = $.userPwd;
    self.View.valiCode = $.valiCode;
    self.View.sendValiCodeLabel = $.sendValiCodeLabel;
    self.View.registerLabel = $.registerLabel;
    self.View.loginLabel = $.loginLabel;
  }
};

User.Register.Controller =
{
  onSendValiCodeLabelClicked: function()
  {
    return;
  },

  onRegisterLabelClicked: function()
  {
    return;
  },

  onLoginLabelClicked: function()
  {
    Alloy.createController('login/login',
    {
    });
  },

  onWindowClosed: function()
  {
    $.off();
    $.destroy();

    self.View.sendValiCodeLabel.removeEventListener('click', self.Controller.onSendValiCodeLabelClicked);
    self.View.registerLabel.removeEventListener('click', self.Controller.onRegisterLabelClicked);
    self.View.loginLabel.removeEventListener('click', self.Controller.onLoginLabelClicked);
    self.View.window.removeEventListener('close', self.Controller.onWindowClosed);

    self.View.window.removeAllChildren();
    delete self;
  },

  open: function()
  {
    self.View.window.open();
    self.View.sendValiCodeLabel.addEventListener('click', self.Controller.onSendValiCodeLabelClicked);
    self.View.registerLabel.addEventListener('click', self.Controller.onRegisterLabelClicked);
    self.View.loginLabel.addEventListener('click', self.Controller.onLoginLabelClicked);
    self.View.window.addEventListener('close', self.Controller.onWindowClosed);

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

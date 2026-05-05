// CMS认证API - 修复JSON解析问题
export const POST = async ({ request }) => {
  try {
    // 检查请求体是否为空
    if (!request.body) {
      return Response.json({
        success: false,
        error: '请求体为空'
      }, { status: 400 });
    }
    
    // 尝试解析JSON
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return Response.json({
        success: false,
        error: 'JSON解析失败: ' + parseError.message
      }, { status: 400 });
    }
    
    const { action, username, password } = body;
    
    console.log('CMS认证API调用:', { action, username });
    
    // 验证必填字段
    if (!action || !username || !password) {
      return Response.json({
        success: false,
        error: '请填写所有必填字段'
      }, { status: 400 });
    }
    
    if (action === 'login') {
      // 验证用户名和密码
      if (username === 'admin' && password === 'admin123') {
        // 生成token（生产环境应使用JWT等安全方案）
        const token = `cms-token-${Date.now()}-${Math.random().toString(36).substr(2)}`;
        
        return Response.json({
          success: true,
          user: {
            id: 1,
            username: 'admin',
            role: 'admin',
            name: '系统管理员'
          },
          token: token,
          message: '登录成功'
        });
      } else {
        return Response.json({
          success: false,
          error: '用户名或密码错误'
        }, { status: 401 });
      }
    }
    
    if (action === 'logout') {
      // 登出逻辑（生产环境应使token失效）
      return Response.json({
        success: true,
        message: '已退出登录'
      });
    }
    
    return Response.json({
      success: false,
      error: '未知操作'
    }, { status: 400 });
    
  } catch (error) {
    console.error('CMS认证API错误:', error);
    return Response.json({
      success: false,
      error: '服务器错误: ' + error.message
    }, { status: 500 });
  }
};
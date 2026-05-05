// 测试API路由
export const GET = async () => {
  return Response.json({
    success: true,
    message: 'API测试成功',
    timestamp: new Date().toISOString()
  });
};

export const POST = async ({ request }) => {
  try {
    const body = await request.json();
    return Response.json({
      success: true,
      message: 'POST请求成功',
      received: body,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: '请求处理失败: ' + error.message
    }, { status: 400 });
  }
};
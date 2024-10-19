document.getElementById('loginForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // 阻止表单的默认提交行为  
  
    const username = document.getElementById('username').value;  
    const password = document.getElementById('password').value;  
  
    // 模拟存储的账户和密码  
    const storedUsername = 'www';  
    const storedPassword = '123456';  
  
    if (username === storedUsername && password === storedPassword) {  
        // 跳转到欢迎页面  
        window.location.href = 'welcome.html';  
    } else {  
        alert('用户名或密码错误');  
    }  
});
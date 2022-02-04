//ログインモーダル
Vue.component('login_modal', {
  template: `
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ログイン</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              
              <form id="login_form">
                <div class="form-group">
                  <label for="InputEmail1">メールアドレス</label>
                  <input type="email" class="form-control" id="InputEmail1" aria-describedby="InputEmail1" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="InputPassword1">パスワード</label>
                  <input type="password" class="form-control" id="InputPassword1" placeholder="Password">
                </div>
                <button class="btn btn-primary" onclick="location.href='..MyPage/my_page.html'">ログイン</button>
              </form>
            </div>
          </div>
        </div>
  `,
});

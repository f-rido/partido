//ヘッダーメニュー
Vue.component('header_nav', {
  template: `
  <nav class="navbar fixed-top navbar-light bg-light">
    <nav id="navbar_inner" class="navbar navbar-expand-sm navbar-light bg-light">
         <!-- ホームへ戻るリンク -->
         <a href="../top/index.html" id="logo">
            <img src="../img/soccercourt.jpg" alt="soccercourt" id="logo">
            <p>Partido</p>
         </a>
              
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#nav-bar">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="nav-bar">
            <ul class="navbar-nav">
                <li class="nav-item"><a href="#opponent_container" href="../top/index.html#opponent_container" class="nav-link">相手を探す</a></li>
                <li class="nav-item"><a href="../recruitment/recruitment.html" class="nav-link">相手を募集する</a></li>
                <li class="nav-item"><a href="#concept_container"　href="../top/index.html#concept_container" class="nav-link">コンセプト</a></li>
                <li class="nav-item"><a href="../contact/contact.html" class="nav-link">お問い合わせ</a></li>
                <li class="nav-item"><a href="../registration/registration.html" class="nav-link">会員登録</a></li>
                <li class="nav-item">
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    <i class="fas fa-sign-in-alt"></i>ログイン
                  </button>
                </li>
            </ul>
        </div>
     </nav>
  </nav>
  `,
});

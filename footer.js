//フッター
Vue.component('footer_menu', {
  template: `
  <div class="footer_container">
      <div class="row">
  
          <div class="col-md-3 col-sm-6">
          <div class="footer-info-single">
          	<ul class="list-unstyled">
          		<li><a href="../calendar/calendar.html"><i class="fa fa-angle-double-right"></i> カレンダーから探す</a></li>
          		<li><a href="../list/list.html"><i class="fa fa-angle-double-right"></i> 募集一覧から探す</a></li>
          		<li><a href="../entry_team/entry_team.html"><i class="fa fa-angle-double-right"></i> 登録チームから探す</a></li>
          	</ul>
          </div>
          </div>
  
          <div class="col-md-3 col-sm-6">
          <div class="footer-info-single">
          	<ul class="list-unstyled">
          		<li><a href="#step_container" href="../top/index.html#step_container"><i class="fa fa-angle-double-right"></i> ご利用のステップ</a></li>
          		<li><a href="../registration/registration.html" title=""><i class="fa fa-angle-double-right"></i> 会員登録</a></li>
          		<li><a href="./MyPage/my_page.html" title="" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-angle-double-right"></i> ログイン</a></li>
          	</ul>
          		
          		<!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                          <label for="exampleInputEmail1">メールアドレス</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">パスワード</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary">ログイン</button>
                      </form>
                    </div>
                  </div>
                </div>
              <!-- Modal End -->
          </div>
          </div>
         
  
          <div class="col-md-3 col-sm-6">
          <div class="footer-info-single">
          	<ul class="list-unstyled">
          		<li><a href="#concept_container" href="../top/index.html#concept_container"><i class="fa fa-angle-double-right"></i> コンセプト</a></li>
          		<li><a href="../rules/rules.html"><i class="fa fa-angle-double-right"></i> 利用規約</a></li>
          		<li><a href="../question/question.html" title=""><i class="fa fa-angle-double-right"></i> よくある質問</a></li>
          		<li><a href="../contact/contact.html" title=""><i class="fa fa-angle-double-right"></i> お問い合わせ</a></li>
          	</ul>
          </div>
          </div>
          
          <div class="col-md-3 col-sm-6">
          <div class="footer-info-single" id="info">
          		<h5><a href="../company/company.html">Partido株式会社</a></h5>
          		<p>〒105-0000<br>東京都港区港町1-1-1</p>
          		<p>TEL 03-5555-5555</p>
          		<p>FAX 03-5555-5556</p>
          		<i class="fas fa-envelope footer_icon"></i>
          		<i class="fab fa-twitter-square footer_icon"></i>
          		<i class="fab fa-facebook-square footer_icon"></i>
          </div>
          </div>
  
      </div>
      <section id="copyright">
          <p>© 2021 Partido inc.</p>
      </section>
    </div>
  `,
});

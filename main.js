//ヘッダー
new Vue({
  el: '#header_nav',
});

//ログインモーダル
new Vue({
  el: '#login_modal',
});


//タイトル セクション
Vue.component('main_visual', {
  template: `
  <div id="title_container">
    <h1>Partid<i class="fas fa-futbol ball"></i></h1>
    <p>サッカーの試合マッチングサービス</p>
  </div>  
  `,
});

new Vue({
  el: '#main_visual',
});

//新着 セクション （本来は登録フォームからインプットした情報を表示させたい）
Vue.component('new_arrival', {
  template: `
  <div id="new_container">
    <h1><span class="badge rounded-pill bg-danger new">New</span>新着</h1>
    
    <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">日付</th>
            <th scope="col">学校名／チーム名</th>
            <th scope="col">学年／カテゴリー</th>
            <th scope="col">場所</th>
            <th scope="col">詳細</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">2021/7/7</th>
            <td>葛飾学園高校サッカー部</td>
            <td>３年</td>
            <td>東京都葛飾区</td>
            <td class="info"><i class="fas fa-file"></i></td>
          </tr>
          <tr>
            <th scope="row">2021/8/1</th>
            <td>さいたま第２中学校サッカー部</td>
            <td>３年、２年、１年</td>
            <td>さいたま市</td>
            <td class="info"><i class="fas fa-file"></i></td>
          </tr>
          <tr>
            <th scope="row">2021/8/22</th>
            <td>スミダＦＣ</td>
            <td>社会人</td>
            <td>東京都墨田区</td>
            <td class="info"><i class="fas fa-file"></i></td>
          </tr>
          <tr>
            <th scope="row">2021/8/29</th>
            <td>小平サッカークラブ</td>
            <td>小学4年</td>
            <td>東京都小平市</td>
            <td class="info"><i class="fas fa-file"></i></td>
          </tr>
        </tbody>
      </table>
    
    
  </div>  
  `,
});

new Vue({
  el: '#new_arrival',
});

//コンセプト
Vue.component('concept', {
  template: `
  <div id="concept_container">
    <h1><span class="badge badge-pill badge-light cpt">Concept</span>コンセプト</h1>
    <p>当サイト、Partidoは、部活動やサークル活動、クラブチームの対戦相手を見つけられるサービスです。<br>
    対戦相手を見つけるためにたくさんの時間を費やしているチームは多いはずです。<br>
    Partidoを利用すると、対戦相手を簡単に探すことができます。<br>
    また、気づいたら対戦相手は「だいたいやったことのあるチーム」と感じている監督やコーチも多いのではないでしょうか。<br>
    対戦したことのないチームと試合ができるのは、新鮮ですし、選手たちにも刺激になります。<br>
    マッチメイクに困っているチームに対して少しでもお役に立てれば幸いです。<br>
    </p>
  </div>  
  `,
});

new Vue({
  el: '#concept',
});

//対戦相手を探す
Vue.component('opponent', {
  template: `
  <div id="opponent_container">
  
    <h1><span class="badge badge-pill badge-primary search">Search</span>対戦相手を探す</h1>
    
    <div id="research">
      <div id="calendar">
        <a href="../calendar/calendar.html">
        <p>カレンダーから探す</p>
        <img src="../img/calendar.jpg" alt="カレンダー">
        </a>
      </div>
      
      <div id="recruitment">
        <a href="../list/list.html">
        <p>募集一覧</p>
        <img src="../img/bosyu.jpg" alt="募集">
        </a>
      </div>
      
      <div id="team_list">
       <a href="../entry_team/entry_team.html">
        <p>登録チームから探す</p>
        <img src="../img/touroku.jpg" alt="チーム">
       </a>
      </div>
    </div>
      
  </div>  
  `,
});

new Vue({
  el: '#opponent',
});

//ご利用のステップ
Vue.component('user_step', {
  template: `
  <div id="step_container">
    <h1><span class="badge badge-pill badge-success step">Step</span>ご利用のステップ</h1>
    
      <div class="phase">
      <span class="badge badge-secondary phase_number">STEP 1</span>
      <div class="phase_name">会員登録／ログイン</div>
      </div>
      <br>
      
      <i class="fas fa-arrow-circle-down arrow"></i>
      <br>
      
      <div class="phase">
         <span class="badge badge-secondary phase_number">STEP 2</span>
         <div class="phase_name">対戦相手を探す</div>
      </div>
      <br>
      
      <i class="fas fa-arrow-circle-down arrow"></i>
      <br>
      
      <div class="phase">
         <span class="badge badge-secondary phase_number">STEP 3</span>
        <div class="phase_name">マッチング</div>
      </div>
      <br>
      
      <i class="fas fa-arrow-circle-down arrow"></i>
      <br>
      
      <div class="phase">
         <span class="badge badge-secondary phase_number">STEP 4</span>
        <div class="phase_name">試合</div>
      </div>
      <br>
      
      <button id="entry" onclick="location.href='../registration/registration.html'"><i class="fa-solid fa-pencil pen"></i>会員登録</button>
      
  </div>  
  `,
});

new Vue({
  el: '#user_step',
});

//フッター
new Vue({
  el: '#footer_menu',
});

//戻るボタン
// ボタンの表示／非表示を切り替える関数
const updateButton = () => {
  if ($(window).scrollTop() >= 300) {
    // 300px以上スクロールされた
    // ボタンを表示
    $('.back-to-top').fadeIn();
  } else {
    // ボタンを非表示
    $('.back-to-top').fadeOut();
  }
};

// スクロールされる度にupdateButtonを実行
$(window).on('scroll', updateButton);

// ボタンをクリックしたらページトップにスクロールする
$('.back-to-top').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();

  // 600ミリ秒かけてトップに戻る
  $('html, body').animate({ scrollTop: 0 }, 600);
});

// ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする
updateButton();


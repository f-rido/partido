//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 1000,//時間指定(1000＝1秒)
  strokeWidth: 0.2,//進捗ゲージの太さ
  color: '#555',//進捗ゲージのカラー
  trailWidth: 0.2,//ゲージベースの線の太さ
  trailColor: '#bbb',//ゲージベースの線のカラー
  text: {//テキストの形状を直接指定       
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%,-50%)',
      'font-size':'1rem',
      color: '#fff',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash_text").fadeOut(10);//フェイドアウトでローディングテキストを削除
  $(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
  $(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加
  $("#splash").fadeOut();//#splashエリアをフェードアウト
});



//ハンバーガーメニュー
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});

//スクロールするとヘッダーに背景色が付く
jQuery(window).on('scroll', function () {
  if (jQuery('.header').height() < jQuery(this).scrollTop()) {
      jQuery('.header').addClass('change-color');
  } else {
      jQuery('.header').removeClass('change-color');
  }
});

//ログインモーダル　ｗ600px以上
$(function() {
  $("#login-show").click(function(){
    $('#login-modal').fadeIn();
  });
  $('#close-modal').click(function() {
    $('#login-modal').fadeOut();
  });
});

//ログインモーダル　ｗ599px以下
$(function() {
  $("#login-show-sp").click(function(){
    $('#login-modal').fadeIn();
  });
  $('#close-modal').click(function() {
    $('#login-modal').fadeOut();
  });
});

  // タブ
  $(function(){
    // tab1以外を非表示
        $(' .tab-contents div[class != "tab1"]').hide( );

        // タブをクリック
        $(".tab-num").click(function(){
          // 一度全てのコンテンツを非表示
          $('.tab-contents div').hide( );

          // クリックしたタブを表示
          $($(this).attr("href")).show();

          // 現在のcurrentクラスを削除
          $(".current").removeClass("current");

          // 選択されたタブにcurrentクラスを追加
          $(this).addClass("current");

          return false;
        });
});
// タブ END

// #Q&Aアコーディオン
// （1）プラス／マイナスボタン
$(function() {
  $(".qa-dt").click(function() {
      // $(this) はクリックされた要素
      $(this).children(".toggle_btn").toggleClass('active');
  });
});

//（2）アコーディオンの開閉
$(".qa-dd").hide();
$(".qa-dt").on("click", function(e){
  $(this).next('.qa-dd').slideToggle('fast');
});
// #Q&Aアコーディオン END

'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

  /* 
    ログインページ表示時にどこからログインしようとしたかを、
    保存期間を10分としてCookieに保存してから、
    ログインページを描画する
  */
  const from = req.query.from;
  if(from) {
    res.cookie('loginFrom', from, { expires: new Date(Date.now() + 600000)});
  }
  res.render('login');
});

module.exports = router;

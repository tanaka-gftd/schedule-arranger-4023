'use strict';

function ensure(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  //認証がうまく行かなかった際に、どこにアクセスしようとしたかを、/loginのクエリに含めた形でリダイレクト
  res.redirect('/login?from=' + req.originalUrl);
}

module.exports = ensure;

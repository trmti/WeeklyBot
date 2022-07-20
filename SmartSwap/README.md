# BSC 爆速トレード Bot(Smart Swap)

この Bot は自分のウォレットを監視して、スワップしたいトークンがウォレットに追加されたときに自動で好きな別のトークンにスワップしてくれます。デフォルトでは BSC チェーンで動いていますが、provider の値を変更すれば他のチェーン上でも動きます。

IDO などで新しいトークンを受け取ったときになど、他の人よりも早くスワップしたいときに使って下さい。

This bot monitor your wallet. And if new token that you want to swap is added in your wallet, this bot swap the token to other token you want automatically.

this bot works on BSC chain, but if you change the variable called 「provider」, you can change network work on.

You can use this if you want to swap token quicker than other peaple such as IDO.

# 使い方(How to use)

スワップ元のトークンを「 TokenA 」、スワップ先のトークンを「 TokenB 」とします。

まずは、config.js を開いてアドレスや秘密鍵などを設定して下さい。

次に、以下の 2 つのコマンドを実行してください。

```
$ npm install
$ npm start
```

<br>
We define the swap souce token 「 TokenA 」, and the swap destination token 「 TokenB 」.

First, open config.js file and write addresses and secretKey and any configratoins.

Second, run these two command.

```
$ npm install
$ npm start
```

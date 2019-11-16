# nodemailer-and-mailhog-sample

## 概要

* Docker 上に MailHog を立ち上げて、そこに対してメールを送信するサンプルです。
* メールは nodemailer を使用して送信します。

## 実行環境

* Node.js - 10.x
* Docker - 19.x
* Docker Compose - 1.24.x
  * MailHog - latest

## 使用ライブラリ

* nodemailer - 6.3.x

## 動作確認

### 1. サンプルのダウンロード

```bash
git clone git@github.com:yasu-s/nodemailer-and-mailhog-sample.git
```

### 2. パッケージインストール  

```bash
cd nodemailer-and-mailhog-sample
npm install
```

### 3. メールサーバー起動  

```bash
docker-compose up -d
```

### 4. サンプルの起動  

```bash
npm run start
```

## 実行結果

![mailhog1](https://user-images.githubusercontent.com/2668146/68924138-61db4a80-07c3-11ea-855e-87d311c7ca89.png)

![mailhog2](https://user-images.githubusercontent.com/2668146/68924150-66076800-07c3-11ea-89db-bea729a7d0d5.png)

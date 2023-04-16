# アプリ名未定
ハックツハッカソンジンベエカップで作ったWebサイトです．
プルリクはdevelopにお願いします．

## 開発を始める前に

### クローンの手順
```bash
# 既存リポジトリをローカルにダウンロード
git clone https://github.com/kototo522/zinbee-app

# ファイルの移動
cd　zinbee-app

# 依存関係をインストール
yarn install

# 作業ブランチの作成
git checkout -b ブランチ名
```

### 実行してみる
```bash
yarn dev
```
<br/>

## push作業
```bash
# 変更したファイル全てを追加する
git add .

# 変更したファイルが追加されているか，秘密ファイルが入ってないか確認
git status

# コミット
git commit -m "ここにコメント"

# プッシュ
git push origin ブランチ名

```

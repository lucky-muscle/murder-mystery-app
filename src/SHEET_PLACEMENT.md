# シート配置ルール

すべて `public/sheets/` 以下に置きます。`src` や `dist` には置きません。

## ルール説明シート

7ページ想定です。

```txt
public/sheets/rule-sheet-1.png
public/sheets/rule-sheet-2.png
public/sheets/rule-sheet-3.png
public/sheets/rule-sheet-4.png
public/sheets/rule-sheet-5.png
public/sheets/rule-sheet-6.png
public/sheets/rule-sheet-7.png
```

## 作品概要シート

現在は1ページ想定です。

```txt
public/sheets/overview-sheet-1.png
```

2ページ以上にする場合は、`src/sheetPaths.ts` の `overviewPages` の数字を変更し、以下のように置いてください。

```txt
public/sheets/overview-sheet-1.png
public/sheets/overview-sheet-2.png
```

## 見取り図

2ページ想定です。

```txt
public/sheets/maps/floor-map-1.png
public/sheets/maps/floor-map-2.png
```

## キャラクターシート

各4ページ想定です。

```txt
public/sheets/characters/kawagishi-michiya-1.png
public/sheets/characters/kawagishi-michiya-2.png
public/sheets/characters/kawagishi-michiya-3.png
public/sheets/characters/kawagishi-michiya-4.png

public/sheets/characters/umemura-moe-1.png
public/sheets/characters/umemura-moe-2.png
public/sheets/characters/umemura-moe-3.png
public/sheets/characters/umemura-moe-4.png

public/sheets/characters/midorino-daichi-1.png
public/sheets/characters/midorino-daichi-2.png
public/sheets/characters/midorino-daichi-3.png
public/sheets/characters/midorino-daichi-4.png

public/sheets/characters/kurosaka-hideki-1.png
public/sheets/characters/kurosaka-hideki-2.png
public/sheets/characters/kurosaka-hideki-3.png
public/sheets/characters/kurosaka-hideki-4.png

public/sheets/characters/tani-alice-1.png
public/sheets/characters/tani-alice-2.png
public/sheets/characters/tani-alice-3.png
public/sheets/characters/tani-alice-4.png
```

## 追加情報シート

現在は各1ページ想定です。

```txt
public/sheets/additional/kawagishi-michiya.png
public/sheets/additional/umemura-moe.png
public/sheets/additional/midorino-daichi.png
public/sheets/additional/kurosaka-hideki.png
public/sheets/additional/tani-alice.png
```

## 調査カード

```txt
public/sheets/investigation/item-A-1.png
...
public/sheets/investigation/item-E-4.png
public/sheets/investigation/victim-1.png
...
public/sheets/investigation/villa-4.png
```

## 特別調査シート

```txt
public/sheets/special-investigation/special-1.png
public/sheets/special-investigation/special-2.png
public/sheets/special-investigation/special-3.png
public/sheets/special-investigation/special-4.png
public/sheets/special-investigation/special-5.png
```

## エンディングシート

```txt
public/sheets/endings/ending-1.png
public/sheets/endings/ending-2.png
public/sheets/endings/ending-3.png
public/sheets/endings/ending-4.png
public/sheets/endings/ending-5.png
```

対応表：

```txt
エンディング① 最多投票：川岸道也
エンディング② 最多投票：梅村萌絵
エンディング③ 最多投票：緑野大地
エンディング④ 最多投票：黒坂秀樹
エンディング⑤ 最多投票：谷アリス
```

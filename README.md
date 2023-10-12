# Polyrhythm API

## 概要

Polyrhythm API は URL のパラメタに応じて特定の HTTP ステータスコードを返す API です。  
Polyrhythm API は Cloudflare Workers 上に構築されています。

## 使い方

- エンドポイントは `/` です。
- パラメタ `code` に HTTP ステータスコードとして有効なコードを指定します。

### 例

リクエスト

```bash
curl http://127.0.0.1:8080/?code=200
```

レスポンス:

```json
{
    "id": "634bef12-5388-45b7-a6f4-4c2ace48f6da",
    "response": {
        "status": {
            "code": 200,
            "name": "OK"
        }
    },
    "request": {
        "code": 200
    }
}
```

## ライセンス

Apache-2.0

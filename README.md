# Lojiper Backend Assessment

Bu proje ise alim surecinde kullanilmak uzere tasarlanmis ve uygulanmistir. Projenin amaci kucuk capli bir bilet satin alma uygulamasidir. Bu amac icin gerekli APIleri icerir.

## Gerekli bagimliliklarin yuklenmesi

Oncelikle projeyi local cihaziniza kopyaladiktan sonra yapmaniz gereken bagimliliklari indirmeniz gerekmektedir.

Asagidaki komutlardan birini kullanarak gerekli bagimlilik paketlerini indirebilirsiniz.

```
npm install
// or
npm i
```

## Gerekli konfigurasyonlarin yapilmasi

Sonrasinda projenin ana dizininde bir ".env" dosyasi olustrumaniz ve asagida yazilan ayarlari dosya icerisine eklemeniz gerekmektedir.

```
// Projenin calisacagi port numarasi.
PORT=0000

// MongoDB baglanti urli
MONGODB_URL=mongodb://username:password@localhost:27017/mydatabase

// jsonwebtoken kutuphanesi icin gerekli secret key
JWT_SECRET_KEY=YOUR_JWT_SECRET_KEY
```

## Test verisinin veri tabaninda olusturulmasi

Bu asamada artik proje calisir durumda fakat veritabani icerisinde ornek olarak bir veri bulunmamakta. Eger ornek sefer verisi eklemek isterseniz proje icerisinde bulunan "~/config/db.js" dosyasinda ki yorum satirinda bulunan kodu aktiflestirmeniz gerekmektedir

Bunun icin asagidaki kodu yorum satirindan kaldirip tek seferlik calistirip tekrar yorum satirina aldiktan sonra tekrar calistirin.

```js
// busSeeder();
```

Projeyi baslatmak icin asagaidaki komutu kullanabilirsiniz.

```
npm start
```

API Documentation [=> Go](APIDocumentation.md)

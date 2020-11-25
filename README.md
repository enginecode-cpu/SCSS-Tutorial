## SCSS를 정리한 저장소

### 환경 세팅 방법

#### 1. npm 시작하기

```
npm init -y
```

<br>

#### 2. npm을 이용해서 parcel-bundler 설치하기

```
npm i -D parcel-bundler
```

#### 3. 간단한 HTML, SCSS 파일을 만들어서 실행해보기

index.html 파일

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>설치 후 간단한 사용</title>
  <link rel="stylesheet" href="./style.scss">
</head>
<body>
  <div class="container">
    <div class="item"></div>
  </div>
</body>
</html>
```

<br>

style.scss 파일

```scss
.container {
  $size: 100px;
  .item {
    width: $size;
    height: $size;
    background-color: tomato;
  }
}
```

<br>

터미널에서 아래 명령어를 입력하고 실행한다. 

<br>

```
npx parcel index.html
```

<br>

그러면 `localhost` 와 함께 포트 번호가 나올 것이다. 웹 브라우저에 해당 주소를 입력 후 에러 없이 동작하면 잘 동작한 것이다.
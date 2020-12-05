# 파일 가져오기 및 파일 분할하기
## 파일 가져오기

### 파일 가져오기
```
@import 'hello.css';
@import "https://hello.com/hello";
@import url(hello);
```

<br>

### 여러 파일 가져오기

```
@import "header", "main", "footer";
```

<br>

## 파일 분할 하기

파일 이름 앞에 `_`를 붙이게 되면 `css`로 컴파일하지 않게 된다. 

`style.css`에서 모든 파일을 넣게 된다면, `style.scss`를 제외한 모든 파일 이름 앞에 `_`를 붙여준다.

```
_footer.scss
_header.scss
_hello.scss
_main.scss
_reset.scss
style.scss
```

<br>

`style.scss` 파일에서 다른 파일을 임포트할 때는 `_`를 제외한다.
```scss
@import "header", "footer", "main", "reset", "hello";
```

<br>

터미널에서 다음 명령어를 입력한다.
```
npx node-sass scss --output css
```

<br>

`css` 폴더 안에 `style.css`가 들어가 있고 임포트했던 내용들이 들어가 있을 것이다.
## 상위 선택자 참조
`&`를 이용한다.

<br>

scss 파일
```scss
.list {
  li {
    &:last-child {
      color: aqua;
    }
  }
}
```

<br>

css 파일
```css
.list li:last-child {
  color: aqua
}
```
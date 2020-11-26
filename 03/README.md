## 중첩

scss 파일

```scss
.section {
  width: 100%;
  .list {
    padding: 20px;
    li {
      float: left;
    }
  }
}
```

<br>

css 파일

```css
.section {
  width: 100%;
}
.section .list {
  padding: 20px;
}
.section .list li {
  float: left;
}
```

<br>

둘 다 똑같이 동작하는 코드이다.
# A-teams-과제

### 작업기간 : 2022.02.23 ~ 2022.02.28

<br><br>

## **[ 구현기능 ]**

<br>

> Filtering

```
  1. dropdown menu 클릭 시 checkbox 생성 (toggle + menu 바깥영역 클릭 시 close)
  2. checkbox 클릭
    : 견적 요청 카드 필터링 + dropdown menu에 클릭한 checkbox 카운팅 + Reset button 노출
  3. '필터링 리셋' 클릭 시 filtering 초기화
  4. '상담 중인 요청만 보기' Toggle button 클릭 시 status가 상담중인 카드만 필터링
  5. 조건에 맞는 카드가 없을 시 '조건에 맞는 견적 요청이 없습니다' 화면 노출

```

<br>

> GNB

```
  1. 로고, 가공업체, 로그아웃 버튼
  2. mobile 반응형 레이아웃 구현
    (메뉴버튼 클릭 시 슬라이드메뉴 : 백그라운드 영역음영 + 클릭 시 close)
```

<br>
<br>
<br>

## **[ 프로젝트 구조 ]**

```html
├── App.tsx ├── index.tsx ├── index.scss ├── src │ ├── components │ │ ├── Header
│ │ │ ├── Header.tsx │ │ │ ├── Header.scss │ │ │ ├── Filtering.tsx │ │ │ ├──
Filtering.scss │ │ │ └── Toggle.tsx │ │ ├── Nav │ │ │ ├── Nav.tsx │ │ │ ├──
Nav.scss │ │ │ ├── SideMenu.tsx │ │ │ └── SideMenu.scss │ │ └── Product │ │ ├──
Card.tsx │ │ ├── Card.scss │ │ ├── Product.tsx │ │ └── Product.scss │ ├── store
│ │ └── index.tsx │ └── type │ └── types.ts └── public ├── img └── index.html
```

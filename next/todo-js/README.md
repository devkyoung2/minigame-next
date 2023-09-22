### NEXT 공식문서를 보며 개념을 익히기 위해 만든 미니게임 웹사이트입니다!

게임하러가기

1. up down
2. 숫자야구
3. 땅따먹기
4. 다이아몬드게임

### 프로젝트를 하며 학습한 NEXT의 개념을 기록합니다. 잘못된 부분이 있다면 PR 해주세요!

#### 1. Client-Side Navigation

> Next는 서버에서 렌더링 된 페이지를 받아오는 Server-Side-Rendering 언어이다.
> 하지만 Next의 Link 컴포넌트는 Client-side Navigation 을 지원하게 만즐어준다.
> Link 컴포넌트가 브라우저의 ViewPort에 들어오는 순간 Next는 자동적으로 linked된 페이지를 prefetch한다.
> 이후 Link 컴포넌트 클릭 시 이미 로딩된 데이터들만 부분적으로 바꿔준다.
> 따라서 Next는 최초 1회에 한해서 서버에서 렌더링된 페이지를 받아오는 SSR로 동작하고, 이후에 브라우저에서 미리 로딩된 코드를 교체해주며, 자동으로 Code Splitting 해주어 빠르게 동작한다.

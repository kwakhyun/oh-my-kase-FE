# 🍣OhMyKase - FE

![OMKTransparentThumb](https://user-images.githubusercontent.com/78805018/189072229-0b8e4d49-27b5-4ccd-a977-dd963d7da789.png)

# 오마카세
![omakaseimg](https://user-images.githubusercontent.com/78805018/188814729-1667f13c-94a1-42f5-b51f-803a12f467ca.jpeg)

'오마카세'라는 말은 한국 뿐 아니라 전 세계에서 고급 식사의 대표적인 형태로 가장 많이 사용되고 있습니다. 셰프에게 요리를 전적으로 맡긴다는 의미의 ‘오마카세’는, 계절에 따라 가장 좋은 식재료를 사용해 우아하고 예술적인 요리를 제공하는 방식으로 널리 활용되는 용어입니다.
출처: 미쉐린 가이드 / Michelin Guide
Author: Jacob Dean
Translate: 이정윤 에디터
2021년 10월 6일

## 📢 프로젝트 소개
서울 내 오마카세 정보를 확인하고 후기를 공유할 수 있는 앱입니다.<br>
모바일 기준으로 개발한 프로젝트로 가로길이 767 pixels 이하에서 화면이 보입니다.
- [API 명세서](https://www.notion.so/292f7430abf84789881c9fcdbb37bdfa?v=e177777b59454944b89398cdd19ed872)
- [프로젝트 PPT](https://www.miricanvas.com/v/1oruo5)
- [프로젝트 시연 영상](https://youtu.be/GS2FOlhXKBY)
###### 시연 영상은 버그 수정 패치 전 촬영 영상으로 UI 오류가 남아있습니다.
- [프로젝트 배포 URL](http://oh-my-kase.s3-website.ap-northeast-2.amazonaws.com)
###### 현재는 서버가 내려간 상태로 웹사이트에 접속해도 데이터가 없습니다.
<br>

## 🗓 프로젝트 기간
- 2022.09.02 - 2022.09.08
<br>

## 📝 프로젝트 노트
- Done
  
  9.2
    - 와이어프레임, API 명세서 작성
    - 기본 UI 구현 (Mobile First)
    
  9.3
    - mockAPI(json-server)를 이용한 테스트

  9.5
    - jwt 토큰 로그인 적용
    - main / detail / mypage 서버 연동 테스트
    
  9.6
    - main 사이드 메뉴 추가
    - 프로필 이미지 업로드 및 변경 기능
  
  9.7
    - detail / mypage favorite 기능 적용
    - comment CRUD 기능 적용
    - 메인 페이지 infinite scroll 적용
    - 사이드 메뉴 filtering 개선

  9.8
    - 회원가입 유효성 검증
    - 구글 계정으로 로그인 적용
    - 세부적인 UI 오류 수정
    - 전체적인 코드 정리
    - jwt 토큰 refresh 적용
    <br>
       
## 🛠 사용한 기술 스택
- React
- Redux Toolkit
- React Query
- styled-components
<br>

## 👥 팀원 소개
- 곽현 ([kwakhyun](https://github.com/kwakhyun))
- 준묵 ([dan-studio](https://github.com/dan-studio))
<br>

## ✅ Commit Convention
### 타입은 태그와 제목으로 구성되고, 태그는 영어로 쓰되 첫 문자는 대문자로 합니다.
### "태그: 제목"의 형태이며, : 뒤에만 space가 있음에 유의합니다.

### 예시) Feat: 댓글 삭제 기능 추가

`Feat:` 새로운 기능을 추가할 경우

`Fix:` 버그를 고친 경우

`Design:` CSS 등 사용자 UI 디자인 변경

`!BREAKING CHANGE:` 커다란 API 변경의 경우

`!HOTFIX:` 급하게 치명적인 버그를 고쳐야하는 경우

`Style:` 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우

`Refactor:` 프로덕션 코드 리팩토링

`Comment:` 필요한 주석 추가 및 변경

`Docs:` 문서를 수정한 경우

`Test:` 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)

`Chore:` 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)

`Rename:` 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
 
`Remove:` 파일을 삭제하는 작업만 수행한 경우

# VAKKUNA Mobile Store

전문 에스테틱 포지셔닝의 고보습 장벽 크림을 소개하고 자사몰 구매로 연결하는 모바일 우선 브랜드 웹사이트입니다.

## 실행하기

Node.js 18.17 이상이 필요합니다.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Windows PowerShell에서는 `Copy-Item .env.example .env.local`을 사용하세요. 브라우저에서 `http://localhost:3000`을 엽니다.

## 자사몰 주소 설정

`.env.local` 파일에 실제 주소를 입력합니다.

```env
NEXT_PUBLIC_STORE_URL=https://실제-자사몰-주소.com
```

모든 구매 버튼이 이 주소를 사용합니다. Vercel 배포 시에도 프로젝트의 **Settings → Environment Variables**에 같은 이름으로 등록하세요.

## 이미지 교체

- 대표 제품 이미지: `public/images/product-hero.svg`
- 크림 텍스처 이미지: `public/images/texture.svg`

실제 이미지 파일을 같은 폴더에 넣은 뒤 `app/page.tsx`의 이미지 경로만 변경하면 됩니다. 세로형 대표 이미지는 약 4:5, 텍스처 이미지는 정사각형을 권장합니다.

## 문구 사용 전 확인

후기와 시험 관련 문구는 레이아웃 확인용 예시입니다. 실제 판매 전에는 실증 자료와 화장품 표시·광고 기준에 맞는 확정 문구로 교체하세요.

## GitHub에 올리기

GitHub에서 빈 저장소를 만든 다음, 이 프로젝트 폴더에서 실행합니다.

```bash
git init
git add .
git commit -m "Build VAKKUNA mobile storefront"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

## Vercel 배포

1. [Vercel](https://vercel.com)에 로그인하고 **Add New → Project**를 선택합니다.
2. 위에서 만든 GitHub 저장소를 불러옵니다.
3. Framework Preset이 **Next.js**인지 확인합니다.
4. Environment Variables에 `NEXT_PUBLIC_STORE_URL`과 실제 자사몰 주소를 등록합니다.
5. **Deploy**를 누릅니다.

이후 GitHub의 `main` 브랜치에 변경사항을 올리면 Vercel이 자동으로 다시 배포합니다.

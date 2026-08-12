import Image from "next/image";
import { storeUrl } from "@/config/site";

const benefits = [
  { number: "01", title: "겹겹이 채우는 보습", text: "메마른 피부에 풍부한 보습감을 전해 오래도록 편안하게" },
  { number: "02", title: "탄탄한 장벽 케어", text: "외부 환경에 지친 피부 컨디션을 섬세하게 보호" },
  { number: "03", title: "부드러운 밀착 텍스처", text: "크리미하게 녹아들어 끈적임 없이 포근한 마무리" },
];

const reviews = [
  ["★★★★★", "난방을 켜면 늘 당겼는데, 아침까지 피부가 편안해요.", "민감·건성 / 30대"],
  ["★★★★★", "에스테틱에서 관리받은 듯 매끈하고 은은한 윤기가 돌아요.", "복합성 / 40대"],
  ["★★★★★", "꾸덕하지만 답답하지 않아 겨울 데일리 크림으로 정착했어요.", "건성 / 20대"],
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="wordmark" href="#top" aria-label="VAKKUNA 홈">VAKKUNA</a>
        <a className="navLink" href="#story">Our Ritual</a>
        <a className="bag" href={storeUrl} target="_blank" rel="noreferrer" aria-label="자사몰로 이동">BAG <span>0</span></a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">PROFESSIONAL AESTHETIC SKINCARE</p>
          <h1>Deep comfort.<br /><i>Quiet strength.</i></h1>
          <p className="lead">깊은 보습으로 완성하는<br />겨울 피부의 단단한 평온</p>
          <a className="button dark" href={storeUrl} target="_blank" rel="noreferrer">장벽 크림 만나보기 <span>↗</span></a>
        </div>
        <div className="heroVisual">
          <Image src="/images/product-hero.svg" alt="VAKKUNA 인텐시브 배리어 크림" fill priority sizes="(max-width: 760px) 100vw, 55vw" />
          <span className="season">AUTUMN — WINTER<br />ESSENTIAL</span>
        </div>
      </section>

      <section className="intro shell" id="story">
        <p className="eyebrow">THE BARRIER RITUAL</p>
        <h2>피부가 가장 고요해지는 시간</h2>
        <p>늦가을의 찬 바람부터 한겨울의 건조한 실내까지.<br />전문 에스테틱의 섬세한 보습 설계를 한 병에 담았습니다.</p>
        <div className="benefitGrid">
          {benefits.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="texture">
        <div className="textureImage"><Image src="/images/texture.svg" alt="부드럽고 풍부한 크림 텍스처" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="textureCopy">
          <p className="eyebrow">RICH, YET BREATHABLE</p>
          <h2 className="text-4xl font-light leading-snug">
            포근하게 감싸고<br />
            <span className="font-medium">가볍게 숨 쉬는</span>
          </h2>
          <p>풍부한 영양감의 크림이 피부 온도에 부드럽게 녹아듭니다. 피부 위에 얇고 유연한 보습막을 형성해 매끄러운 윤기만 남깁니다.</p>
          <div className="tags"><span>깊은 보습</span><span>장벽 케어</span><span>윤기 개선</span></div>
        </div>
      </section>

      <section className="detail shell">
        <div className="detailTitle"><p className="eyebrow">HOW TO USE</p><h2>Your nightly<br /><i>barrier ritual</i></h2></div>
        <ol>
          <li><b>01</b><div><strong>마지막 단계에</strong><p>스킨케어 마지막 단계에서 진주 한 알 크기를 덜어주세요.</p></div></li>
          <li><b>02</b><div><strong>부드럽게 밀착</strong><p>얼굴 안쪽에서 바깥쪽으로 감싸듯 천천히 펴 발라주세요.</p></div></li>
          <li><b>03</b><div><strong>건조한 곳은 한 번 더</strong><p>볼과 입가 등 당김이 느껴지는 부위에 얇게 레이어링하세요.</p></div></li>
        </ol>
      </section>

      <section className="reviews">
        <div className="shell">
          <p className="eyebrow">REAL SKIN, REAL COMFORT</p><h2>먼저 경험한 피부의 이야기</h2>
          <div className="reviewGrid">
            {reviews.map(([stars, copy, user]) => <blockquote key={copy}><span>{stars}</span><p>“{copy}”</p><footer>{user}</footer></blockquote>)}
          </div>
          <p className="trust">피부 자극 테스트 완료* <i>·</i> 에스테틱 스킨케어 포뮬러 <i>·</i> 매일 사용 가능한 장벽 케어</p>
          <small>* 위 문구는 실제 시험 완료 후 사용하세요. 현재는 교체용 예시 문구입니다.</small>
        </div>
      </section>

      <section className="closing">
        <p className="eyebrow">THE SEASON OF COMFORT</p><h2>This winter,<br /><i>choose comfort.</i></h2>
        <p>차가운 계절에도 흔들림 없는 피부를 위해</p>
        <a className="button light" href={storeUrl} target="_blank" rel="noreferrer">VAKKUNA 자사몰 바로가기 <span>↗</span></a>
      </section>

      <footer className="footer shell"><span className="wordmark">VAKKUNA</span><p>Professional care, made personal.</p><small>© 2026 VAKKUNA. All rights reserved.</small></footer>
      <a className="stickyBuy" href={storeUrl} target="_blank" rel="noreferrer"><span><b>인텐시브 배리어 크림</b><small>늦가을–겨울 고보습 케어</small></span><strong>구매하러 가기&nbsp; ↗</strong></a>
    </main>
  );
}

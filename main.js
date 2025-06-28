const apiKey = "ffdd818ac2de422298ec86f061819349";  // 발급받은 API 키를 넣으세요
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const article = data.articles[0];
    const articleContainer = document.querySelector('.article');

    // 조건에 따른 링크 HTML 미리 만들기
    let urlHtml = '';
    if (article.url) {
      urlHtml = `
        <a href="${article.url}" target="_blank" style="margin-top: 1rem; display: inline-block; font-weight: bold;">
          전체 기사 보기 →
        </a>
      `;
    } else {
      console.warn("article.url이 없습니다:", article);
    }
    articleContainer.innerHTML = `
      <h2 class="article-title">${article.title}</h2>
      <p class="article-meta">${new Date(article.publishedAt).toLocaleDateString()} · ${article.author || "기자 미상"}</p>
      ${article.description ? `<p>${article.description}</p>` : ''}
      ${article.urlToImage ? `<img src="${article.urlToImage}" alt="기사 이미지" style="max-width:100%; margin: 1rem 0;">` : ''}
      ${article.content ? `<p>${article.content.replace(/\[\+\d+ chars\]$/, '')}</p>` : ''}
      ${urlHtml}

      <div class="custom-article-body">
      <p>Bitcoin [BTC] dropped below $103K, triggering a $160 million long liquidation cascade on Binance. This wipeout followed the unwinding of a highly leveraged cluster that had been building for days.</p>
      <p>Simultaneously, Binance’s Net Taker Volume plummeted to -$100 million, confirming intense selling pressure from market orders.</p>
      <p>Panic forced the market to reset, pushing out overexposed longs in a flash.</p>
      <p>Such liquidation-driven resets often mark short-term bottoms, especially when accompanied by signs of rising spot accumulation and reduced leverage.</p>
      <p>Capitulation or cleansing?<br>
      Now here’s where it gets more layered. BTC’s 7-day Realized Cap fell to $33.48 billion, while the 1-day variant collapsed to $1.11 billion, according to Santiment.</p>
      <p>This steep contraction revealed diminished realized profits and fading market participation.</p>
      <p>Rather than pure bearishness, this compression signals potential deleveraging. It suggests that short-term speculation may be getting flushed out of the system, possibly setting the stage for a more stable buildup.</p>
      <p>Are STHs stepping back?<br>
      BTC’s short-term holder activity plunged, evidenced by the Realized Cap HODL Waves (1d to 7d) dropping from above 8% to nearly 3.6%.</p>
      <p>These market participants, often driven by hype or panic, have capitulated.</p>
      <p>At the same time, the Stock-to-Flow (S2F) Ratio surged to 335—its highest level this cycle—indicating extreme supply scarcity.</p>
      <p>Together, this combo of seller exhaustion and supply constraints paints the early signs of recovery potential.</p>
      <p>Does THIS point to sidelined firepower ready to deploy?<br>
      Now let’s talk liquidity. The Exchange Stablecoin Ratio sat at 5.45, with a -1.23% daily change. This means stablecoins now make up a higher share of assets on exchanges.</p>
      <p>A declining ratio often shows stronger potential buying power, as more funds remain in reserve rather than being deployed.</p>
      <p>Liquidity hasn’t fled the market; it’s on standby. If sentiment stabilizes, that capital may quickly rotate into BTC positions.</p>
      <p>Will bears stay in control?<br>
      BTC traded around $103,569, just below the 0.236 Fibonacci level at $105,245, at press time. Despite this, it held the $102K support line through multiple tests.</p>
      <p>Meanwhile, the 9-day and 21-day moving averages have yet to flip bullish.</p>
      <p>If bulls reclaim the 0.382 or 0.5 levels, upward momentum could build toward the $110K–$112K range.</p>
      <p>Is the worst behind, or could BTC face more downside?<br>
      Bitcoin’s $160M liquidation flush, paired with negative Net Taker Volume and collapsing short-term conviction, suggests the market has cleared excessive leverage.</p>
      <p>At the same time, extreme scarcity and available buying power hint at a brewing reversal.</p>
      <p>Therefore, while caution remains necessary, the odds are tilting toward a stabilization phase that may support gradual recovery if bulls defend the $102K–$103K range.</p>
      <p>Therefore, while the structure looks shaky, BTC still holds a chance to bounce if accumulation strengthens near this range.</p>
      
    </div>
`;

  

   

  });

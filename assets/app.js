const siteData = {
  phone: '13201481331',
  address: '陕西省西安市高新区锦业路1号都市之门B座1幢1单元10809室',
  nav: [
    ['index.html', '首页'],
    ['solutions.html', '解决方案'],
    ['bases.html', '入驻基地'],
    ['news.html', '资讯动态'],
    ['about.html', '关于君安'],
    ['contact.html', '联系我们']
  ],
  bases: {
    shanzha: {
      name: '费县山楂种植集群',
      subtitle: '产地溯源案例',
      image: 'assets/images/shanzha-base.png',
      intro: '以费县红山前山楂种植集群为案例，呈现基地实景、产地信息与种植管理的可视化展示。',
      tags: ['山楂', '山东费县', '基地实景'],
      gallery: [
        'assets/images/shanzha-1.jpg',
        'assets/images/shanzha-2.jpg',
        'assets/images/shanzha-3.png'
      ]
    },
    danshen: {
      name: '莱芜白花丹参种植基地',
      subtitle: '道地药材案例',
      image: 'assets/images/danshen-base.png',
      intro: '以莱芜白花丹参种植基地为案例，展示中药材从种植环境到田间管理的信息承载方式。',
      tags: ['白花丹参', '山东莱芜', '种植管理'],
      gallery: [
        'assets/images/danshen-1.jpg',
        'assets/images/danshen-2.jpg',
        'assets/images/danshen-3.png'
      ]
    },
    peony: {
      name: '菏泽精品芍药基地',
      subtitle: '精品药材案例',
      image: 'assets/images/peony-base.jpg',
      intro: '以菏泽精品芍药基地为案例，展示芍药种植、品种和基地实景素材的标准化归集。',
      tags: ['芍药', '山东菏泽', '品种展示'],
      gallery: [
        'assets/images/peony-1.jpg',
        'assets/images/peony-2.jpg',
        'assets/images/peony-3.png'
      ]
    },
    mudan: {
      name: '菏泽孔庄牡丹基地',
      subtitle: '花木产地案例',
      image: 'assets/images/mudan-base.jpg',
      intro: '位于菏泽市牡丹区黄堽镇孔庄，以牡丹种植为案例，呈现产地信息与基地实景的持续归集。',
      tags: ['牡丹', '山东菏泽', '牡丹区'],
      gallery: [
        'assets/images/mudan-1.jpg',
        'assets/images/mudan-2.jpg'
      ]
    }
  }
};

function renderShell() {
  const page = document.body.dataset.page || 'home';
  const current = {
    home: 'index.html', solutions: 'solutions.html', bases: 'bases.html',
    detail: 'bases.html', news: 'news.html', about: 'about.html', contact: 'contact.html'
  }[page];
  const nav = siteData.nav.map(([href, label]) => `<a class="${href === current ? 'is-active' : ''}" href="${href}">${label}</a>`).join('');
  document.querySelector('[data-site-header]').innerHTML = `
    <header class="site-header">
      <div class="shell header-inner">
        <a class="brand" href="index.html" aria-label="君安医疗科技首页"><span class="brand-mark">J</span><span>君安医疗科技<small>JUNAN MEDICAL TECHNOLOGY</small></span></a>
        <button class="menu-button" type="button" aria-label="打开导航" aria-expanded="false" data-menu-button><i></i><i></i><i></i></button>
        <nav class="site-nav" data-site-nav>${nav}</nav>
        <a class="header-phone" href="tel:${siteData.phone}">业务咨询<br><strong>${siteData.phone}</strong></a>
      </div>
    </header>`;
  document.querySelector('[data-site-footer]').innerHTML = `
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div><a class="brand footer-brand" href="index.html"><span class="brand-mark">J</span><span>君安医疗科技<small>JUNAN MEDICAL TECHNOLOGY</small></span></a><p>面向中医药产业的数字化服务与质量协同支持。</p></div>
        <div><h3>服务方向</h3><a href="solutions.html">基地数字化管理</a><a href="solutions.html">质量追溯</a><a href="solutions.html">产业协同</a></div>
        <div><h3>联系我们</h3><a href="tel:${siteData.phone}">${siteData.phone}</a><p>${siteData.address}</p></div>
      </div>
      <div class="footer-bottom"><div class="shell">Copyright © 2026 君安医疗科技有限公司</div></div>
    </footer>`;
}

function renderBaseDetail() {
  const target = document.querySelector('[data-base-detail]');
  if (!target) return;
  const key = new URLSearchParams(window.location.search).get('base');
  const base = siteData.bases[key];
  if (!base) {
    target.innerHTML = `<section class="empty-state"><p class="eyebrow">BASE PROFILE</p><h1>该基地资料正在完善中</h1><p>更多优质中药材基地将持续入驻。</p><a class="button button-primary" href="bases.html">返回入驻基地</a></section>`;
    return;
  }
  const gallery = (base.gallery && base.gallery.length)
    ? `<div class="shell gallery">${base.gallery.map(img => `<img src="${img}" alt="${base.name}实景">`).join('')}</div>`
    : `<div class="shell gallery"><div class="gallery-placeholder"><p class="eyebrow">IMAGES COMING</p><p>该基地图片资料正在持续完善中。</p></div></div>`;
  target.innerHTML = `
    <section class="detail-hero" style="background-image:url('${base.image}')"><div class="image-shade"></div><div class="shell detail-hero-content"><p class="eyebrow">${base.subtitle}</p><h1>${base.name}</h1><p>${base.intro}</p></div></section>
    <section class="section"><div class="shell detail-grid"><div><p class="eyebrow">BASE OVERVIEW</p><h2>基地信息</h2><p class="lead">入驻基地信息将以真实产地、品种与种植实景为基础持续完善，帮助产业合作方高效了解基地情况。</p><div class="tag-row">${base.tags.map(tag => `<span>${tag}</span>`).join('')}</div></div><aside class="fact-panel"><strong>服务关注点</strong><p>产地信息归集</p><p>种植过程展示</p><p>品质协同管理</p></aside></div></section>
    <section class="section section-alt"><div class="shell section-heading"><p class="eyebrow">FIELD GALLERY</p><h2>基地实景</h2><p>以下图片来自基地提供的公开展示素材。</p></div>${gallery}</section>
    <section class="consult-strip"><div class="shell"><div><p class="eyebrow">COOPERATION</p><h2>了解入驻与合作方式</h2></div><a class="button button-light" href="tel:${siteData.phone}">致电咨询</a></div></section>`;
}

function initInteractions() {
  const button = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-site-nav]');
  if (button && nav) button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
  const toTop = document.querySelector('[data-to-top]');
  if (toTop) {
    window.addEventListener('scroll', () => toTop.classList.toggle('is-visible', window.scrollY > 500));
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

document.addEventListener('DOMContentLoaded', () => { renderShell(); renderBaseDetail(); initInteractions(); });

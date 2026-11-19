// Сайт приложения Lynx3D (lynx3d.app): node tools/build.js — главная и политика на двух языках.
// Тексты — здесь, разметка — в шаблонах ниже. Стиль общий с whitelynx.team (assets/style.css).
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE = "https://lynx3d.app";
const TEAM = "https://whitelynx.team";
const MAIL = "info@whitelynx.team";
const YEAR = 2026;
/** Ссылки на APK — когда выйдет первая версия; пока кнопки «Скоро». */
const APK = null;

const T = {
  ru: {
    lang: "ru", other: "en", otherLabel: "EN", prefix: "/",
    title: "Lynx3D — галерея с 3D и VR для Android",
    desc: "Галерея Civitai и Wikimedia Commons с объёмом: 3D по карте глубины прямо на телефоне, своя карта глубины, VR-режим и панорамы 360°.",
    lead: "Картинки Civitai и фото Wikimedia Commons — объёмные. 3D по карте глубины прямо на телефоне, своя карта глубины, VR-режим для очков и панорамы 360°.",
    navFeatures: "Возможности", navEditions: "Версии", navPrivacy: "Конфиденциальность", navTeam: "Команда",
    download: "Скачать APK", soon: "Скоро", soonNote: "Первая версия готовится. Напишите нам — сообщим, когда выйдет.",
    contact: "Написать нам",
    featuresTitle: "Возможности",
    features: [
      ["3D по глубине:", "модель строит карту глубины прямо на телефоне — без интернета и без отправки картинок куда-либо, — и картинка становится объёмной при наклоне. Моделей три: Depth Anything V2, Depth Anything 3 и Distill-Any-Depth."],
      ["Своя карта глубины:", "загрузите карту из ComfyUI или A1111 — большие модели на компьютере считают точнее."],
      ["VR-режим", "для очков типа Cardboard: ленты взглядом, 3D с настраиваемой силой объёма, панорамы 360°, видео, слайдшоу."],
      ["Civitai:", "ленты картинок и видео, промпты и параметры генерации, поиск моделей и авторов, вход через Civitai по желанию."],
      ["Wikimedia Commons:", "избранные, фото дня, панорамы 360°, анаглифы и стереокарточки, природа и космос, поиск и категории — со свободными лицензиями, с автором и лицензией у каждого фото."],
      ["Свои фото:", "галерея «Телефон» — ваши фото и видео в 3D и VR. Всё считается на телефоне, файлы никуда не уходят."],
      ["Сохранение:", "стереопара для любых VR-очков и карта глубины — в галерею телефона."],
      ["Без рекламы, аналитики и трекеров.", ""],
    ],
    editionsTitle: "Две версии",
    freeTitle: "Lynx3D", freeTag: "бесплатно",
    freeText: "Вся объёмная часть, Civitai и Wikimedia Commons — только безопасные изображения. Подходит всем.",
    extTitle: "Lynx3D Extended", extTag: "платно · скоро",
    extText: "Для взрослых пользователей: все рейтинги контента Civitai по вашему выбору и согласию. Ставится рядом с бесплатной.",
    installTitle: "Установка",
    install: [
      "Скачайте APK на телефон и откройте его — из уведомления о загрузке или из папки «Загрузки».",
      "Android попросит разрешить установку из браузера: нажмите <b>Настройки</b>, включите <b>Разрешить из этого источника</b>, вернитесь назад.",
      "Нажмите <b>Установить</b>. Play Защита проверит приложение — не отключайте её.",
    ],
    installNote: "Нужен Android 8.0 или новее. Обновления приложение проверяет само и ставит поверх, настройки сохраняются.",
    unofficial: "Lynx3D — неофициальное приложение, не связано с Civitai и Фондом Викимедиа и не одобрено ими.",
    byTeam: "Сделано командой «Белые Рыси»",
    // политика
    prTitle: "Конфиденциальность Lynx3D",
    prLead: "Без рекламы, аналитики и трекеров. Для просмотра аккаунт не нужен.",
    pr: [
      ["Только на телефоне", "<p>Настройки, кэш картинок и карт глубины, свои карты глубины, токены входа в Civitai (зашифрованы ключом в Android Keystore). Карты глубины считаются на телефоне — картинки никуда не отправляются. Данные приложения не попадают в резервные копии Android.</p>"],
      ["Фото и видео с телефона", "<p>Галерея «Телефон» читает фото и видео из медиатеки Android только с вашего разрешения; на Android 14 и новее можно разрешить лишь выбранные фото. Файлы не копируются и никуда не загружаются: показ, карты глубины и VR работают прямо на устройстве. Открыть файл в другом приложении или отправить его можно только вашим нажатием. Разрешение отзывается в настройках Android.</p>"],
      ["Civitai", "<p>Картинки и данные о них загружаются напрямую с civitai.com. Вход через Civitai — на странице самого Civitai, пароль через приложение не проходит. После входа реакции, коллекции и подписки читаются и меняются в вашем аккаунте Civitai по <a href=\"https://civitai.com/content/privacy\">его правилам конфиденциальности</a>.</p>"],
      ["Wikimedia Commons", "<p>Фото и сведения о них (автор, лицензия) загружаются напрямую с commons.wikimedia.org и upload.wikimedia.org. Wikimedia видит ваш IP-адрес; <a href=\"https://foundation.wikimedia.org/wiki/Policy:Privacy_policy\">политика Фонда Викимедиа</a>.</p>"],
      ["Наш сервер (расширенные теги)", "<p>После принятия правил приложение создаёт гостевой профиль: открытая часть ключа устройства (закрытый ключ не покидает телефон), модель телефона и язык, отметки согласия с версией правил, случайный ник, ваши теги, голоса и жалобы с ID картинок, сохранённые настройки — чтобы вернулись после переустановки; и только если привяжете сами — почта или Telegram. Как любой веб-сервер, он хранит технические журналы запросов (время, адрес, IP) для работы и защиты от злоупотреблений.</p>"],
      ["Обновления и модели", "<p>Приложение проверяет новые версии и скачивает модели глубины (по кнопке) с GitHub. Личные данные не передаются; GitHub видит ваш IP-адрес.</p>"],
      ["Удаление данных", "<p>«Настройки → Профиль приложения → <b>Удалить профиль</b>» удаляет данные на нашем сервере; добавленные теги остаются без вашего имени. Данные на телефоне удаляются вместе с приложением. Отключить Civitai — выйти из аккаунта в настройках.</p>"],
      ["Этот сайт", "<p>Статический, без cookies, аналитики и форм. Хостинг видит IP-адреса посетителей.</p>"],
      ["Вопросы", `<p>Пишите: <a href="mailto:${MAIL}">${MAIL}</a>.</p>`],
    ],
    updated: "Обновлено: 19 ноября 2026",
    back: "← Lynx3D",
  },
  en: {
    lang: "en", other: "ru", otherLabel: "RU", prefix: "/en/",
    title: "Lynx3D — gallery with 3D and VR for Android",
    desc: "A Civitai and Wikimedia Commons gallery with depth: 3D from a depth map built on the phone, your own depth maps, VR mode and 360° panoramas.",
    lead: "Civitai images and Wikimedia Commons photos — in 3D. Depth maps built right on the phone, your own depth maps, a VR mode for headsets and 360° panoramas.",
    navFeatures: "Features", navEditions: "Editions", navPrivacy: "Privacy", navTeam: "Team",
    download: "Download APK", soon: "Coming soon", soonNote: "The first version is on its way. Write to us and we'll tell you when it's out.",
    contact: "Write to us",
    featuresTitle: "Features",
    features: [
      ["3D from depth:", "a model builds a depth map right on the phone — offline, nothing is uploaded — and the picture turns 3D when you tilt it. Three models: Depth Anything V2, Depth Anything 3 and Distill-Any-Depth."],
      ["Your own depth map:", "load a map from ComfyUI or A1111 — big models on a computer are more accurate."],
      ["VR mode", "for Cardboard-type headsets: feeds by gaze, 3D with adjustable depth strength, 360° panoramas, videos, slideshow."],
      ["Civitai:", "image and video feeds, prompts and generation parameters, search for models and authors, optional sign-in with Civitai."],
      ["Wikimedia Commons:", "featured pictures, picture of the day, 360° panoramas, anaglyphs and stereo cards, nature and space, search and categories — under free licenses, with the author and license on every photo."],
      ["Your own photos:", "the Phone gallery shows your photos and videos in 3D and VR. Everything runs on the phone; files never leave it."],
      ["Save:", "a stereo pair for any VR headset and the depth map — to your phone's gallery."],
      ["No ads, analytics or trackers.", ""],
    ],
    editionsTitle: "Two editions",
    freeTitle: "Lynx3D", freeTag: "free",
    freeText: "All the 3D, Civitai and Wikimedia Commons — safe images only. Fine for everyone.",
    extTitle: "Lynx3D Extended", extTag: "paid · coming soon",
    extText: "For adult users: every Civitai content rating, by your choice and consent. Installs next to the free one.",
    installTitle: "Install",
    install: [
      "Download the APK on your phone and open it from the download notification or the Downloads folder.",
      "Android asks to allow installing apps from your browser: tap <b>Settings</b>, turn on <b>Allow from this source</b>, go back.",
      "Tap <b>Install</b>. Google Play Protect checks the app — keep it turned on.",
    ],
    installNote: "Requires Android 8.0 or newer. The app checks for updates itself and installs them over the current version; your settings stay.",
    unofficial: "Lynx3D is an unofficial app. It is not affiliated with or endorsed by Civitai or the Wikimedia Foundation.",
    byTeam: "Made by the White Lynx team",
    prTitle: "Lynx3D privacy",
    prLead: "No ads, analytics or trackers. You don't need an account to browse.",
    pr: [
      ["Only on your phone", "<p>Settings, the image and depth map cache, your own depth maps, Civitai sign-in tokens (encrypted with a key in Android Keystore). Depth maps are computed on the phone — images are not uploaded anywhere. App data is excluded from Android backups.</p>"],
      ["Photos and videos on your phone", "<p>The Phone gallery reads photos and videos from the Android media library only with your permission; on Android 14 and newer you can allow just selected photos. Files are not copied or uploaded anywhere: viewing, depth maps and VR all run on the device. A file is opened in another app or shared only when you tap to do so. You can revoke the permission in Android settings.</p>"],
      ["Civitai", "<p>Images and their data load directly from civitai.com. Signing in with Civitai happens on Civitai's own page — your password never passes through the app. After that your reactions, collections and follows are read and changed in your Civitai account under <a href=\"https://civitai.com/content/privacy\">its privacy policy</a>.</p>"],
      ["Wikimedia Commons", "<p>Photos and their details (author, license) load directly from commons.wikimedia.org and upload.wikimedia.org. Wikimedia sees your IP address; see the <a href=\"https://foundation.wikimedia.org/wiki/Policy:Privacy_policy\">Wikimedia Foundation privacy policy</a>.</p>"],
      ["Our server (extended tags)", "<p>After you accept the rules, the app creates a guest profile: the public part of a device key (the private key never leaves the phone), phone model and language, your consents with the rules version, a random nickname, your tags, votes and reports with image IDs, saved settings so they come back after reinstalling; and only if you link them — email or Telegram. Like any web server, it keeps technical request logs (time, address, IP) to run the service and protect it from abuse.</p>"],
      ["Updates and models", "<p>The app checks for new versions and downloads depth models (when you tap the button) from GitHub. No personal data is sent; GitHub sees your IP address.</p>"],
      ["Deleting your data", "<p>Settings → App profile → <b>Delete profile</b> deletes your data on our server; tags you added stay without your name. Data on the phone is removed with the app. To disconnect Civitai, sign out in Settings.</p>"],
      ["This site", "<p>Static, with no cookies, analytics or forms. The host sees visitors' IP addresses.</p>"],
      ["Questions", `<p>Write to <a href="mailto:${MAIL}">${MAIL}</a>.</p>`],
    ],
    updated: "Updated: November 19, 2026",
    back: "← Lynx3D",
  },
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function layout(t, page, title, desc, body) {
  const url = SITE + t.prefix + page;
  return `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="ru" href="${SITE}/${page}">
<link rel="alternate" hreflang="en" href="${SITE}/en/${page}">
<link rel="icon" href="/assets/lynx-logo.svg" type="image/svg+xml">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta name="theme-color" content="#0891b2">
<link rel="stylesheet" href="/assets/style.css">
</head>
<body>
<header class="top"><div class="wrap">
  <a class="brand" href="${t.prefix}"><img src="/assets/lynx-logo.svg" alt="" width="36" height="36">Lynx3D</a>
  <nav class="nav">
    <a href="${t.prefix}#features">${t.navFeatures}</a>
    <a href="${t.prefix}#editions">${t.navEditions}</a>
    <a href="${t.prefix}privacy/"${page === "privacy/" ? ' aria-current="page"' : ""}>${t.navPrivacy}</a>
    <a href="${TEAM}${t.prefix}">${t.navTeam}</a>
    <a class="lang" href="${T[t.other].prefix}${page}" hreflang="${t.other}" lang="${t.other}">${t.otherLabel}</a>
  </nav>
</div></header>
<main>
${body}
</main>
<footer><div class="wrap">
  <span>© ${YEAR} <a href="${TEAM}${t.prefix}">White Lynx Team</a> 🐾</span>
  <span>${t.unofficial}</span>
  <span><a href="${t.prefix}privacy/">${t.navPrivacy}</a> · <a href="mailto:${MAIL}">${MAIL}</a></span>
</div></footer>
</body>
</html>
`;
}

function downloadButton(t) {
  return APK
    ? `<a class="btn primary" href="${APK}">${t.download}</a>`
    : `<span class="btn primary soon" aria-disabled="true">${t.download} · ${t.soon}</span>`;
}

function home(t) {
  return layout(t, "", t.title, t.desc, `
<div class="hero wrap">
  <img class="lynx" src="/assets/lynx-logo.svg" alt="" width="190" height="190">
  <h1>Lynx<span class="r">3</span><span class="c">D</span></h1>
  <p class="lead">${t.lead}</p>
  <div class="buttons">
    ${downloadButton(t)}
    <a class="btn" href="mailto:${MAIL}">${t.contact}</a>
  </div>
  ${APK ? "" : `<p class="note">${t.soonNote}</p>`}
</div>

<section id="features"><div class="wrap">
  <h2>${t.featuresTitle}</h2>
  <ul class="features">${t.features.map(([a, b]) => `<li><strong>${a}</strong> ${b}</li>`).join("")}</ul>
</div></section>

<section id="editions"><div class="wrap">
  <h2>${t.editionsTitle}</h2>
  <div class="editions">
    <div class="card"><span class="tag">${t.freeTag}</span><h3>${t.freeTitle}</h3><p>${t.freeText}</p></div>
    <div class="card"><span class="tag">${t.extTag}</span><h3>${t.extTitle}</h3><p>${t.extText}</p></div>
  </div>
</div></section>

<section id="install"><div class="wrap">
  <h2>${t.installTitle}</h2>
  <ol class="steps">${t.install.map((s) => `<li>${s}</li>`).join("")}</ol>
  <p class="note">${t.installNote}</p>
  <p class="note">${t.byTeam} — <a href="${TEAM}${t.prefix}">whitelynx.team</a></p>
</div></section>
`);
}

function privacy(t) {
  return layout(t, "privacy/", t.prTitle, t.prLead, `
<section><div class="wrap prose">
  <p><a href="${t.prefix}">${t.back}</a></p>
  <h1>${t.prTitle}</h1>
  <p class="lead">${t.prLead}</p>
  ${t.pr.map(([h, b]) => `<h2>${h}</h2>${b}`).join("\n  ")}
  <p class="note">${t.updated}</p>
</div></section>
`);
}

function write(rel, html) {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log("wrote", rel);
}

for (const t of Object.values(T)) {
  const base = t.prefix.slice(1);
  write(base + "index.html", home(t));
  write(base + "privacy/index.html", privacy(t));
}
fs.writeFileSync(path.join(ROOT, "CNAME"), "lynx3d.app\n");
fs.writeFileSync(path.join(ROOT, ".nojekyll"), "");

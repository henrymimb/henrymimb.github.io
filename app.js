const panels = {
  topic: { icon: "⌖", kicker: "TOPIC SUPPORT", title: "选题方向辅导", items: ["结合专业方向、现实问题和资料条件筛选选题", "将宽泛主题缩小到具体对象、情境和时间范围", "用一句可回答的问题表达研究核心", "从研究价值、可行性和时间成本三个方面检查选题"] },
  literature: { icon: "⌕", kicker: "LITERATURE SEARCH", title: "文献检索指导", items: ["拆分核心概念、近义词和英文关键词", "根据研究主题建立检索式和筛选条件", "按观点、方法和研究结论整理文献", "从已有研究中识别争议、空白和可延伸方向"] },
  outline: { icon: "☷", kicker: "THESIS STRUCTURE", title: "论文框架梳理", items: ["明确每一章需要回答的具体问题", "梳理章节之间的递进、并列或因果关系", "检查观点、证据与结论是否形成闭环", "先确认提纲，再逐段扩写，减少反复返工"] },
  revision: { icon: "✦", kicker: "REVISION SUPPORT", title: "修改润色建议", items: ["优先修改研究问题和论证逻辑，再调整语言", "检查段落是否包含观点、依据和解释", "优化重复、含混或不够准确的表达", "对照导师反馈逐条记录并推进修改"] },
  format: { icon: "✓", kicker: "FORMAT CHECK", title: "格式规范检查", items: ["核对学校模板中的字体、行距、页边距和编号", "检查图表标题、来源标注和正文引用", "统一文内引用与参考文献著录格式", "完成目录、页码、附录和致谢等细节检查"] },
  defense: { icon: "▷", kicker: "DEFENSE PREP", title: "答辩准备", items: ["用三分钟说清背景、问题、方法、发现和贡献", "准备选题依据、研究方法和创新点等高频问题", "将图表和数据整理成清晰的口头表达", "进行模拟问答并提前准备不足与展望"] },
  "report-cnki": { icon: "知", kicker: "CNKI REPORT", title: "知网报告解读", items: ["识别总文字复制比和各章节标注情况", "区分引用内容、专业术语与需要重点修改的片段", "结合报告来源定位表达和引用问题", "按问题类型给出可执行的修改顺序"] },
  "report-vip": { icon: "V", kicker: "VIP REPORT", title: "维普报告解读", items: ["查看相似片段分布和对应来源", "判断内容重复、引用不当或表达接近等情况", "优先处理核心章节与连续相似内容", "修改后再次核对逻辑、准确性和引用规范"] },
  "report-gezida": { icon: "G", kicker: "GEZIDA REPORT", title: "格子达报告解读", items: ["阅读报告中的重复、引用和风险提示", "定位高风险片段及其上下文逻辑", "根据问题类型调整表达或补充规范引用", "避免只做机械替换，确保修改后语义准确"] },
  checklist: { icon: "✓", kicker: "START CHECKLIST", title: "论文启动清单", items: ["确认学校格式模板、时间节点与导师要求", "写出研究对象、问题和预期成果", "收集一批相关且可信的核心文献", "把近期目标拆成一周内可完成的小任务"] },
  citation: { icon: "“ ”", kicker: "CITATION GUIDE", title: "引用规范", items: ["直接引用需要使用引号并标注准确来源", "转述他人观点同样需要注明出处", "文内引用必须能在参考文献列表中找到", "以学校或学院指定的著录规范为准"] },
  schedule: { icon: "◷", kicker: "THESIS PLAN", title: "论文进度规划", items: ["从提交日期倒推初稿、修改和定稿节点", "给文献阅读、资料收集和分析预留时间", "每周设置可量化、可检查的小目标", "为导师反馈和意外返工留出缓冲时间"] },
  favorites: { icon: "♡", kicker: "MY FAVORITES", title: "我的收藏", dynamic: "favorites" },
  feedback: { icon: "✦", kicker: "FEEDBACK", title: "意见反馈", items: ["记录你觉得难找、难懂或不够清晰的内容", "联系小助理时说明使用设备和所在页面", "我们会根据反馈继续优化内容和体验"] },
  ethics: { icon: "◇", kicker: "ACADEMIC INTEGRITY", title: "服务说明与学术诚信", items: ["提供选题、框架、检索、报告解读和修改建议", "所有研究内容和最终成果应由学生独立完成", "不提供论文代写、数据伪造或规避学术审查服务", "学校要求与导师意见应作为最终执行依据"] }
};

const answerRules = [
  { keys: ["开始", "下手"], text: "先别急着写正文。建议先完成三件事：确认学校要求、用一句话写出研究问题、找 5—10 篇核心文献。完成后再搭一个三级提纲，论文会更容易启动。" },
  { keys: ["选题", "范围"], text: "可以用“研究对象＋具体问题＋情境或范围”来缩小选题。例如不要只写‘短视频营销’，可聚焦某类品牌、某个平台和某个具体影响。" },
  { keys: ["综述", "文献"], text: "文献综述不要按作者逐篇罗列。先按观点、方法或争议分组，再总结每组的共识与不足，最后说明你的研究准备接着解决什么问题。" },
  { keys: ["框架", "章节", "逻辑"], text: "先写清每章的任务：提出问题、回顾研究、说明方法、呈现结果、讨论意义。每一章都要服务于同一个研究问题。" },
  { keys: ["查重", "报告", "重复"], text: "先看重复主要集中在哪些章节，再逐段判断是规范引用、专业术语还是表达过度接近。优先修改连续相似片段，避免只替换同义词。" },
  { keys: ["答辩"], text: "答辩前重点准备五部分：研究背景、核心问题、方法、主要结论和创新或贡献。再练习选题依据、方法合理性和研究不足这三类高频追问。" },
  { keys: ["格式", "引用"], text: "先以学校提供的模板为准，集中核对标题层级、字体行距、图表编号、文内引用和参考文献。格式最好在内容稳定后统一处理。" }
];

const pages = [...document.querySelectorAll(".page")];
const navButtons = [...document.querySelectorAll(".bottom-nav [data-page-target]")];
const sheet = document.querySelector("#contentSheet");
const qrModal = document.querySelector("#qrModal");
const caseLightbox = document.querySelector("#caseLightbox");
const caseLightboxImage = document.querySelector("#caseLightboxImage");
const sheetIcon = document.querySelector("#sheetIcon");
const sheetKicker = document.querySelector("#sheetKicker");
const sheetTitle = document.querySelector("#sheetTitle");
const sheetContent = document.querySelector("#sheetContent");
const favoriteButton = document.querySelector("#favoriteButton");
const toast = document.querySelector("#toast");
let currentPanel = "";
let answering = false;
let toastTimer;

function readFavorites() {
  try { return new Set(JSON.parse(localStorage.getItem("book-studio-favorites") || "[]")); }
  catch { return new Set(); }
}
const saved = readFavorites();

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function updateCount() {
  const count = document.querySelector("#favoriteCount");
  if (count) count.textContent = saved.size;
}

function showPage(name, updateHash = true, anchorSelector = "") {
  const target = pages.find(page => page.dataset.page === name) ? name : "home";
  pages.forEach(page => page.classList.toggle("active", page.dataset.page === target));
  navButtons.forEach(button => button.classList.toggle("active", button.dataset.pageTarget === target));
  if (updateHash && location.hash !== `#${target}`) history.replaceState(null, "", `#${target}`);
  const targetPage = document.querySelector(`#page-${target}`);
  if (anchorSelector) {
    requestAnimationFrame(() => targetPage.querySelector(anchorSelector)?.scrollIntoView({ behavior: "smooth", block: "start" }));
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const entranceItems = [...targetPage.querySelectorAll("[data-reveal]")].filter(element => {
    const rect = element.getBoundingClientRect();
    return rect.top < innerHeight * 1.15;
  });
  entranceItems.forEach((element, index) => {
    element.classList.remove("is-visible");
    element.style.setProperty("--reveal-delay", `${Math.min(index * 65, 390)}ms`);
  });
  requestAnimationFrame(() => requestAnimationFrame(() => refreshReveal(target)));
}

document.querySelectorAll("[data-page-target]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.pageTarget, true, button.dataset.pageAnchor || ""));
});
document.querySelectorAll("[data-scroll-target]").forEach(button => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scrollTarget);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
window.addEventListener("hashchange", () => showPage(location.hash.slice(1), false));

function makeList(items) {
  const list = document.createElement("ul");
  items.forEach(text => {
    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
  });
  return list;
}

function openPanel(key) {
  const panel = panels[key];
  if (!panel) return;
  currentPanel = key;
  sheetIcon.textContent = panel.icon;
  sheetKicker.textContent = panel.kicker;
  sheetTitle.textContent = panel.title;
  if (panel.dynamic === "favorites") {
    const names = [...saved].map(item => panels[item]?.title).filter(Boolean);
    sheetContent.replaceChildren(makeList(names.length ? names : ["你还没有收藏内容。打开任意指南后，点击“收藏这条内容”即可保存。"]));
    favoriteButton.hidden = true;
  } else {
    sheetContent.replaceChildren(makeList(panel.items));
    favoriteButton.hidden = false;
    favoriteButton.classList.toggle("saved", saved.has(key));
    favoriteButton.textContent = saved.has(key) ? "♥ 已收藏" : "♡ 收藏这条内容";
  }
  sheet.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => sheet.querySelector(".modal-close").focus(), 30);
}

function closeSheet() {
  sheet.hidden = true;
  document.body.style.overflow = "";
}

function openQr() {
  qrModal.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => qrModal.querySelector(".modal-close").focus(), 30);
}

function closeQr() {
  qrModal.hidden = true;
  document.body.style.overflow = "";
}

function openCaseImage(source, description) {
  if (!caseLightbox || !caseLightboxImage) return;
  caseLightboxImage.src = source;
  caseLightboxImage.alt = description || "案例原图放大查看";
  caseLightbox.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => caseLightbox.querySelector(".modal-close")?.focus(), 30);
}

function closeCaseImage() {
  if (!caseLightbox || !caseLightboxImage) return;
  caseLightbox.hidden = true;
  caseLightboxImage.removeAttribute("src");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click", () => openPanel(button.dataset.open)));
document.querySelectorAll("[data-close-sheet]").forEach(button => button.addEventListener("click", closeSheet));
document.querySelectorAll("[data-open-qr]").forEach(button => button.addEventListener("click", openQr));
document.querySelectorAll("[data-close-qr]").forEach(button => button.addEventListener("click", closeQr));
document.querySelectorAll("[data-case-image]").forEach(button => {
  button.addEventListener("click", () => openCaseImage(button.dataset.caseImage, button.querySelector("img")?.alt));
});
document.querySelectorAll("[data-close-case]").forEach(button => button.addEventListener("click", closeCaseImage));
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (caseLightbox && !caseLightbox.hidden) closeCaseImage();
  else if (!qrModal.hidden) closeQr();
  else if (!sheet.hidden) closeSheet();
});

favoriteButton.addEventListener("click", () => {
  if (!currentPanel) return;
  if (saved.has(currentPanel)) {
    saved.delete(currentPanel);
    showToast("已取消收藏");
  } else {
    saved.add(currentPanel);
    showToast("已保存到我的收藏");
  }
  localStorage.setItem("book-studio-favorites", JSON.stringify([...saved]));
  updateCount();
  favoriteButton.classList.toggle("saved", saved.has(currentPanel));
  favoriteButton.textContent = saved.has(currentPanel) ? "♥ 已收藏" : "♡ 收藏这条内容";
});

const chatWindow = document.querySelector("#chatWindow");
const chatForm = document.querySelector("#chatForm");
const questionInput = document.querySelector("#questionInput");

function appendMessage(type, text) {
  const message = document.createElement("div");
  message.className = `message ${type}`;
  if (type === "assistant") {
    const avatar = document.createElement("div");
    avatar.className = "chat-avatar";
    const image = document.createElement("img");
    image.src = "./assets/book-avatar.jpg";
    image.alt = "";
    avatar.append(image);
    message.append(avatar);
  }
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  message.append(bubble);
  chatWindow.append(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function findAnswer(question) {
  const normalized = question.replace(/\s+/g, "");
  const rule = answerRules.find(item => item.keys.some(key => normalized.includes(key)));
  return rule?.text || "为了更准确地梳理，请补充三个信息：你的专业、目前处于选题/开题/初稿/修改哪个阶段，以及导师给了什么具体要求。也可以点击“添加微信小助理”进一步沟通。";
}

function ask(question) {
  const text = question.trim();
  if (!text || answering) return;
  answering = true;
  appendMessage("user", text);
  questionInput.value = "";
  const typing = document.createElement("div");
  typing.className = "message assistant typing";
  typing.innerHTML = '<div class="chat-avatar"><img src="./assets/book-avatar.jpg" alt=""></div><div class="bubble"><i></i><i></i><i></i></div>';
  chatWindow.append(typing);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  setTimeout(() => {
    typing.remove();
    appendMessage("assistant", findAnswer(text));
    answering = false;
  }, 560);
}

chatForm?.addEventListener("submit", event => {
  event.preventDefault();
  if (!questionInput.value.trim()) {
    showToast("先描述一下你现在卡住的问题");
    return;
  }
  ask(questionInput.value);
});

document.querySelectorAll("[data-question]").forEach(button => {
  button.addEventListener("click", () => {
    showPage("consult");
    setTimeout(() => ask(button.dataset.question), 180);
  });
});

function initStars() {
  const canvas = document.querySelector("#starCanvas");
  if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const context = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let stars = [];
  let meteors = [];
  let frame;
  const resize = () => {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    width = innerWidth;
    height = innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.min(380, Math.max(220, Math.round((width * height) / 2800)));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.55 + .35,
      speed: Math.random() * .075 + .015,
      phase: Math.random() * Math.PI * 2,
      twinkle: Math.random() * .0042 + .0014,
      sparkle: Math.random() > .78,
      tone: Math.random() > .72 ? "209,158,255" : (Math.random() > .48 ? "120,174,255" : "239,242,255")
    }));
    meteors = Array.from({ length: 8 }, (_, index) => ({
      x: index < 4 ? Math.random() * (width + 180) : width + 120 + (index - 4) * 190,
      y: 35 + Math.random() * height * .58,
      speed: .62 + Math.random() * .5,
      length: 90 + Math.random() * 85,
      delay: index < 4 ? 0 : (index - 3) * 210 + Math.random() * 160
    }));
  };
  const draw = time => {
    context.clearRect(0, 0, width, height);
    stars.forEach((star, index) => {
      star.y -= star.speed;
      if (star.y < -3) { star.y = height + 3; star.x = Math.random() * width; }
      const pulse = (Math.sin(time * star.twinkle + star.phase) + 1) / 2;
      const alpha = .22 + pulse * .72;
      context.beginPath();
      context.fillStyle = `rgba(${star.tone},${alpha})`;
      context.arc(star.x, star.y, star.r * (.78 + pulse * .42), 0, Math.PI * 2);
      context.fill();
      if (star.sparkle && pulse > .76) {
        const ray = 2 + (pulse - .76) * 18;
        context.beginPath();
        context.strokeStyle = `rgba(${star.tone},${(pulse - .76) * 2.6})`;
        context.lineWidth = .55;
        context.moveTo(star.x - ray, star.y);
        context.lineTo(star.x + ray, star.y);
        context.moveTo(star.x, star.y - ray);
        context.lineTo(star.x, star.y + ray);
        context.stroke();
      }
      if (index < 26) {
        const neighbor = stars[index + 1];
        if (neighbor) {
          const distance = Math.hypot(star.x - neighbor.x, star.y - neighbor.y);
          if (distance < 145) {
            context.beginPath();
            context.strokeStyle = `rgba(121,103,224,${(1 - distance / 145) * .13})`;
            context.lineWidth = .6;
            context.moveTo(star.x, star.y);
            context.lineTo(neighbor.x, neighbor.y);
            context.stroke();
          }
        }
      }
    });
    meteors.forEach(meteor => {
      if (meteor.delay > 0) { meteor.delay -= 1; return; }
      meteor.x -= meteor.speed;
      meteor.y += meteor.speed * .48;
      const tailX = meteor.x + meteor.length;
      const tailY = meteor.y - meteor.length * .48;
      const gradient = context.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
      gradient.addColorStop(0, "rgba(242,231,255,.95)");
      gradient.addColorStop(.18, "rgba(178,145,255,.75)");
      gradient.addColorStop(1, "rgba(88,137,255,0)");
      context.beginPath();
      context.strokeStyle = gradient;
      context.lineWidth = 1.55;
      context.moveTo(meteor.x, meteor.y);
      context.lineTo(tailX, tailY);
      context.stroke();
      context.beginPath();
      context.fillStyle = "rgba(255,255,255,.95)";
      context.arc(meteor.x, meteor.y, 1.45, 0, Math.PI * 2);
      context.fill();
      if (meteor.x < -meteor.length || meteor.y > height + meteor.length) {
        meteor.x = width + 120 + Math.random() * width;
        meteor.y = 20 + Math.random() * height * .38;
        meteor.delay = 180 + Math.random() * 520;
      }
    });
    frame = requestAnimationFrame(draw);
  };
  resize();
  addEventListener("resize", resize, { passive: true });
  frame = requestAnimationFrame(draw);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(frame);
    else frame = requestAnimationFrame(draw);
  });
}

let revealObserver;
function initReveal() {
  document.querySelectorAll(".page:not(#page-home)").forEach(page => {
    [...page.children].forEach((element, index) => {
      if (!element.hasAttribute("data-reveal")) element.setAttribute("data-reveal", "");
      if (!element.hasAttribute("data-reveal-delay")) element.dataset.revealDelay = String(index * 75);
    });
  });
  const elements = [...document.querySelectorAll("[data-reveal]")];
  elements.forEach(element => {
    const delay = Number(element.dataset.revealDelay || 0);
    element.style.setProperty("--reveal-delay", `${delay}ms`);
  });
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("is-visible"));
    return;
  }
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: "0px 0px -8% 0px" });
  elements.forEach(element => revealObserver.observe(element));
}

function refreshReveal(pageName) {
  if (!revealObserver) return;
  document.querySelectorAll(`#page-${pageName} [data-reveal]:not(.is-visible)`).forEach(element => revealObserver.observe(element));
}

function initIntakeForm() {
  const form = document.querySelector("#intakeForm");
  if (!form) return;
  const required = [...form.querySelectorAll("[data-intake-required]")];
  const deliverables = [...form.querySelectorAll('[name="deliverables"]')];
  const materials = [...form.querySelectorAll('[name="materials"]')];
  const progressBar = document.querySelector("#intakeProgressBar");
  const percentText = document.querySelector("#intakePercent");
  const statusText = document.querySelector("#intakeStatus");
  const summary = document.querySelector("#intakeSummary");
  const summaryText = document.querySelector("#intakeSummaryText");
  const copyButton = document.querySelector("#copyIntake");
  const deadlineField = form.querySelector('[name="deadline"]');

  if (deadlineField && !deadlineField.value) {
    const now = new Date();
    const localToday = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    deadlineField.value = localToday;
  }

  const value = name => String(new FormData(form).get(name) || "").trim();
  const checked = name => [...form.querySelectorAll(`[name="${name}"]:checked`)].map(input => input.value);
  const updateProgress = () => {
    const completedRequired = required.filter(field => String(field.value || "").trim()).length;
    const percent = Math.round(completedRequired / required.length * 100);
    progressBar.style.width = `${percent}%`;
    percentText.textContent = `${percent}%`;
    statusText.textContent = percent >= 100 ? "信息完整，可以生成清单" : percent >= 70 ? "基本清楚，再补充一点" : percent >= 35 ? "继续填写，报价会更准确" : "先填写基本信息";
  };

  form.addEventListener("input", updateProgress);
  form.addEventListener("change", updateProgress);
  form.addEventListener("submit", event => {
    event.preventDefault();
    const list = [
      "【论文需求清单】",
      `学校：${value("school") || "待确认"}`,
      `学历 / 专业：${value("degree") || "待确认"} / ${value("major") || "待确认"}`,
      `任务类型 / 当前阶段：${value("type") || "待确认"} / ${value("stage") || "待确认"}`,
      `题目或方向：${value("title") || "待确认"}`,
      `总字数：${value("words") || "待确认"}`,
      `交稿时间：${value("deadline") || "待确认"}`,
      `交付格式：${value("format") || "待确认"}`
    ];
    const optional = [
      ["查重要求", value("similarity")],
      ["AIGC 要求", value("aigc")],
      ["图表与数据", value("data")],
      ["配套材料", checked("deliverables").join("、")],
      ["已有资料", checked("materials").join("、")],
      ["特殊要求", value("notes")]
    ];
    optional.forEach(([label, content]) => { if (content) list.push(`${label}：${content}`); });
    summaryText.textContent = list.join("\n");
    summary.hidden = false;
    summary.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(summaryText.textContent);
      showToast("需求清单已复制");
    } catch {
      const selection = getSelection();
      const range = document.createRange();
      range.selectNodeContents(summaryText);
      selection.removeAllRanges();
      selection.addRange(range);
      showToast("已选中内容，请长按复制");
    }
  });
  updateProgress();
}

function initMajorSearch() {
  const input = document.querySelector("#majorInput");
  const options = document.querySelector("#majorOptions");
  const toggle = document.querySelector("#majorToggle");
  if (!input || !options || !toggle) return;
  const majors = Array.isArray(window.BOOK_MAJORS) ? window.BOOK_MAJORS : [];
  const popularMajors = [
    "计算机科学与技术", "机械工程", "机械设计制造及其自动化", "软件工程", "电子信息工程",
    "人工智能", "数据科学与大数据技术", "会计学", "汉语言文学", "法学", "英语", "临床医学"
  ];
  let activeIndex = -1;

  const close = () => {
    options.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    activeIndex = -1;
  };
  const render = () => {
    const keyword = input.value.trim().toLowerCase();
    const directoryOrder = new Map(majors.map((major, index) => [major, index]));
    const matched = majors
      .filter(major => !keyword || major.toLowerCase().includes(keyword))
      .sort((a, b) => {
        const aPopular = popularMajors.indexOf(a);
        const bPopular = popularMajors.indexOf(b);
        if (aPopular >= 0 || bPopular >= 0) {
          if (aPopular < 0) return 1;
          if (bPopular < 0) return -1;
          return aPopular - bPopular;
        }
        if (keyword) {
          const positionDiff = a.toLowerCase().indexOf(keyword) - b.toLowerCase().indexOf(keyword);
          if (positionDiff) return positionDiff;
          const lengthDiff = a.length - b.length;
          if (lengthDiff) return lengthDiff;
        }
        return directoryOrder.get(a) - directoryOrder.get(b);
      });
    options.replaceChildren();
    if (!matched.length) {
      const empty = document.createElement("div");
      empty.className = "major-empty";
      empty.textContent = "没有匹配结果，可直接填写当前专业";
      options.append(empty);
    } else {
      const count = document.createElement("div");
      count.className = "major-count";
      count.textContent = keyword ? `找到 ${matched.length} 个相关专业` : `教育部本科专业目录 · 共 ${matched.length} 个`;
      options.append(count);
      matched.forEach((major, indexInList) => {
        const button = document.createElement("button");
        button.type = "button";
        button.id = `major-option-${indexInList}`;
        button.setAttribute("role", "option");
        if (keyword) {
          const index = major.toLowerCase().indexOf(keyword);
          button.append(major.slice(0, index));
          const mark = document.createElement("mark");
          mark.textContent = major.slice(index, index + keyword.length);
          button.append(mark, major.slice(index + keyword.length));
        } else button.textContent = major;
        button.addEventListener("click", () => {
          input.value = major;
          input.dispatchEvent(new Event("input", { bubbles: true }));
          close();
        });
        options.append(button);
      });
    }
    options.hidden = false;
    input.setAttribute("aria-expanded", "true");
  };
  input.addEventListener("focus", () => render());
  input.addEventListener("input", () => render());
  toggle.addEventListener("click", () => options.hidden ? (input.focus(), render()) : close());
  document.addEventListener("click", event => { if (!event.target.closest(".major-combobox")) close(); });
  input.addEventListener("keydown", event => {
    const buttons = [...options.querySelectorAll('button[role="option"]')];
    if (event.key === "Escape") return close();
    if (!buttons.length || !["ArrowDown", "ArrowUp", "Enter"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Enter" && activeIndex >= 0) return buttons[activeIndex].click();
    activeIndex = event.key === "ArrowDown" ? Math.min(activeIndex + 1, buttons.length - 1) : Math.max(activeIndex - 1, 0);
    buttons.forEach((button, index) => button.classList.toggle("is-active", index === activeIndex));
    input.setAttribute("aria-activedescendant", buttons[activeIndex].id);
    buttons[activeIndex].scrollIntoView({ block: "nearest" });
  });
}

function initOfficialLinks() {
  document.querySelectorAll("[data-official-link]").forEach(link => {
    link.addEventListener("click", () => {
      history.replaceState({ ...(history.state || {}), bookScrollY: window.scrollY }, "", location.href);
    });
  });
  const restore = () => {
    const savedY = history.state?.bookScrollY;
    if (!Number.isFinite(savedY) || (location.hash && location.hash !== "#home")) return;
    requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo({ top: savedY, behavior: "instant" })));
  };
  window.addEventListener("pageshow", restore);
  restore();
}

updateCount();
initReveal();
showPage(location.hash.slice(1) || "home", false);
initStars();
initIntakeForm();
initMajorSearch();
initOfficialLinks();

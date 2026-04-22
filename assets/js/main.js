// عداد تنازلي عالمي
function countdown() {
  const launchDate = new Date("2026-06-01T00:00:00").getTime();
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "تم الإطلاق 🎉";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      `${days} يوم، ${hours} ساعة، ${minutes} دقيقة، ${seconds} ثانية`;
  }, 1000);
}

countdown();

// تبديل اللغة (عربي/إنجليزي)
function switchLanguage(lang) {
  if(lang === 'en') {
    document.body.dir = "ltr";
    document.querySelector('.hero h1').innerText = "Welcome to ROYAL DOOR";
    document.querySelector('.hero p').innerText = "A global royal social platform combining voice rooms, games, and digital gifts.";
    document.querySelector('.gold-btn').innerText = "Download the app now!";
  } else {
    document.body.dir = "rtl";
    document.querySelector('.hero h1').innerText = "مرحباً بك في ROYAL DOOR";
    document.querySelector('.hero p').innerText = "منصة اجتماعية ملكية عالمية تجمع بين الغرف الصوتية، الألعاب، والهدايا الرقمية.";
    document.querySelector('.gold-btn').innerText = "تحميل التطبيق الآن!";
  }
}

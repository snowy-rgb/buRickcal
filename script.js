const nextPageBtn = document.getElementById('nextPageBtn');

nextPageBtn.addEventListener('click', () => {
  document.body.classList.add('fade-out');
  // 애니메이션 지속 시간과 동일하거나 약간 더 긴 시간 후에 페이지 이동
  setTimeout(() => {
    window.location.href = 'next_page.html'; // 이동할 페이지 URL
  }, 500);
});

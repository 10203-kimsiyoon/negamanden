const menuOptions = [
    "피자",
    "스테이크",
    "짜장면",
    "초밥",
    "파스타",
    "삼겹살",
    "쌀국수",
    "햄버거",
    "치킨",
    "라면",
    "샐러드",
    "카레",
    "타코",
    "고기구이",
    "해산물 요리",
    "토스트",
    "떡볶이",
    "회",
    "버거",
    "핫도그"
];

function recommendMenu() {
    const randomIndex = Math.floor(Math.random() * menuOptions.length);
    const randomMenu = menuOptions[randomIndex];

    Swal.fire({
        title: '오늘의 저녁 메뉴는?',
        text: randomMenu,
        icon: 'info',
        confirmButtonText: '다시 추천받기',
        showCancelButton: true,
        cancelButtonText: '닫기',
        customClass: {
            confirmButton: 'btn btn-primary mx-2',
            cancelButton: 'btn btn-secondary mx-2'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            recommendMenu(); // 다시 추천받기
        }
    });
}

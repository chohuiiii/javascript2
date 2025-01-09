// JavaScript 파일 (newApp.js)

document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('inputbox');
    const inputButton = document.getElementById('input-button');

    // 페이지 로드 시 localStorage에서 저장된 배경색을 가져옴
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }

    inputButton.addEventListener('click', () => {
        const color = inputBox.value.trim().toLowerCase();

        // 유효한 색상인지 확인하기 위한 임시 요소 생성
        const isValidColor = (() => {
            const s = new Option().style;
            s.color = color;
            return s.color !== '';
        })();

        if (isValidColor) {
            // 배경색 변경 및 localStorage에 저장
            document.body.style.backgroundColor = color;
            localStorage.setItem('backgroundColor', color);
        } else {
            alert('유효한 색상을 입력해주세요! 예: red, yellow, green 등');
        }
    });

    // Enter 키를 눌러도 동작하도록 이벤트 리스너 추가
    inputBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            inputButton.click();
        }
    });
});

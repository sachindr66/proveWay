function selectBox(card, price) {
    document.querySelectorAll('.card').forEach(b => b.classList.remove('active'));
    card.classList.add('active');
    card.querySelector("input[type='radio']").checked = true;
    document.getElementById('total-price').innerText = `${price}.00`;
}

function changeColor(event, selectEl) {
    event.stopPropagation();
    const card = selectEl.closest('.card');
    card.style.backgroundColor = selectEl.value;
}

function changeSize(event, selectEl) {
    event.stopPropagation();
    const card = selectEl.closest('.card');
    switch (selectEl.value) {
        case 'small':
            card.style.minHeight = '150px';
            break;
        case 'medium':
            card.style.minHeight = '200px';
            break;
        case 'large':
            card.style.minHeight = '300px';
            break;
        default:
            card.style.minHeight = '';
            break;
    }
}
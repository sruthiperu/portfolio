function rotate_photo() {
    const pics = [document.querySelector('.pic_one'), document.querySelector('.pic_two'), 
    document.querySelector('.pic_three'), document.querySelector('.pic_four')];

    const transforms = ['translate(0px, 0px) rotate(0deg)', 'translate(8px, 8px) rotate(2deg)',
    'translate(16px, 16px) rotate(4deg)', 'translate(24px, 24px) rotate(6deg)'];

    const z_indices = [4, 3, 2, 1];

    // find current active index
    let active_idx = -1;
    for (let i = 0; i < pics.length; i++) {
        if (pics[i].classList.contains('active')) {
            active_idx = i;
            break;
        }
    }
    // find next index (wrap around)
    let next_idx = 0;       // only at 4th pic
    if (active_idx != pics.length - 1) {        // if at 4th pic
        next_idx = active_idx + 1;
    }

    // update active class
    pics[active_idx].classList.remove('active');
    pics[next_idx].classList.add('active');

    // rotate to right position
    pics.forEach((pic, i) => {
        let pos = (i - next_idx + pics.length) % pics.length;
        pic.style.transform = transforms[pos];
        pic.style.zIndex = z_indices[pos];
    });
}
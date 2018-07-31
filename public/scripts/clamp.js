const title = $('.title-clamp'),
    content = $('.content-clamp');

for (let i = 0; i < title.length; i++) {
    $clamp(title[i], {clamp: 2});
    $clamp(content[i], {clamp: 5});
}
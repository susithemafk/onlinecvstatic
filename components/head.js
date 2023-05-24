const headElement = document.querySelector('head') 
const title = headElement.querySelector('title')


if (title) {
    title.innerHTML = title.innerHTML + ' | onlinecv'
}

const headContent = `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${!title? '<title>susithemafk</title>' : title }
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
`

headElement.innerHTML += headContent
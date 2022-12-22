const testimonialArr = [
    {
        name: 'Catlaina P.',
        photoUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        text: "I'm good to go. I like Anime more and more each day because it makes my life a lot easier. It's really wonderful."
    },
    {
        name: 'Tracy Z.',
        photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        text: "I made back the purchase price in just 48 hours! Anime should be nominated for service of the year. If you want real marketing that works and effective implementation - Anime's got you covered. Best. Product. Ever!"
    },
    {
        name: 'Ulberto Z.',
        photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        text: "Anime is the most valuable business resource we have EVER purchased. Thanks Anime! Thanks to Anime, we've just launched our 5th website!"
    }
]

const imgConEl = document.querySelector('.img-container');
const textConEl = document.querySelector('.text-container');
let idx = 0;

function updateTestimonial () {
    const {name, photoUrl, text} = testimonialArr[idx];
    imgConEl.innerHTML = `<img src="${photoUrl}" alt="USER IMG">`;
    textConEl.innerHTML = `<p>${text}</p><h4>${name}</h4>`
    idx++;
    if (idx === testimonialArr.length) idx = 0;
    setTimeout(() => {
        updateTestimonial();
    }, 5000);
}

updateTestimonial();
//window.addEventListener('click', updateTestimonial);
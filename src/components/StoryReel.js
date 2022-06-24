import React from 'react'
import '../css/storyreel.css'
import Story from './Story';



function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://coolthemestores.com/wp-content/uploads/2021/03/panda-chrome-theme-wallpaper.jpg"
                profileSrc="http://store-images.s-microsoft.com/image/apps.33713.14403266395963549.251bd55f-0d82-470c-8252-49c4239f9962.cb8a0a60-bf47-446d-bfd7-655d02ae0784"
                title="Panda TV"
            />
            <Story
                image="https://images3.alphacoders.com/278/thumb-1920-278069.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3CqOyiN72qRSlkjxWiVkFDqIH4dtQp3q9h32AhXygC3AnyFJdcDS7RcvYQ0SmaY0e3w&usqp=CAU"
                title="Penguin TV"
            />
            <Story
                image="https://cdn.wallpapersafari.com/64/62/qtOLXx.jpg"
                profileSrc="https://polishnews.co.uk/wp-content/uploads/2022/05/skynews-pug-dog_5774995.jpg"
                title="Doggo TV"
            />
            <Story
                image="https://blog.mystart.com/wp-content/uploads/shutterstock_352176329-e1527775515405.jpg"
                profileSrc="https://www.thesprucepets.com/thmb/LNOmmM1uWkvTcUw6DoZgL6vYrTU=/1500x844/smart/filters:no_upscale()/kitten-56a09ff83df78cafdaa36304.jpg"
                title=" Kitten TV"
            />
            <Story
                image="https://wallpapercave.com/wp/vblTwMY.jpg"
                profileSrc="https://www.yourtango.com/sites/default/files/styles/header_slider/public/image_blog/lion-meaning.png?itok=-eB2XSyC"
                title="Lion TV"
            />
        </div>
    );
}

export default StoryReel;
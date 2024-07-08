function BlogDetails(){
    const Details = [
        {
            Author : "Sreenadh S",
            AuthorProfilePic : "User1.png",
            PostDate : "15-02-2024",
            Title : "A Review of Cars with Advanced Infotainment Systems",
            Content : "Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet um dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
            BlogImage : "BlogImage (6).png"
        },
        {
            Author : "Adhil A",
            AuthorProfilePic : "User1.png",
            PostDate : "16-02-2024",
            Title : "A Review of Cars with Advanced Infotainment Systems",
            Content : "Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet um dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
            BlogImage : "BlogImage (5).png"
        },
        {
            Author : "Jesbin S",
            AuthorProfilePic : "User1.png",
            PostDate : "22-10-2024",
            Title : "A Review of Cars with Advanced Infotainment Systems",
            Content : "Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
            BlogImage : "BlogImage (4).png"
        },
        {
            Author : "Ashif C",
            AuthorProfilePic : "User1.png",
            PostDate : "25-05-2024",
            Title : "A Review of Cars with Advanced Infotainment Systems",
            Content : "Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet um dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
            BlogImage : "BlogImage (3).png"
        },
        {
            Author : "Abhin A",
            AuthorProfilePic : "User1.png",
            PostDate : "30-05-2024",
            Title : "A Review of Cars with Advanced Infotainment Systems",
            Content : "Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
            BlogImage : "BlogImage (2).png"
        },
        {
            Author : "Sreenadh S",
            AuthorProfilePic : "User1.png",
            PostDate : "01-01-2024",
            Title : "A Review of Cars with Advanced Infotainment Systems",
            Content : "The French inventor Nicolas-Joseph Cugnot built the first steam-powered road vehicle in 1769, while the Swiss inventor François Isaac de Rivaz designed and constructed the first internal combustion-powered automobile in 1808. The modern car—a practical, marketable automobile for everyday use—was invented in 1886, when the German inventor Carl Benz patented his Benz Patent-Motorwagen. Commercial cars became widely available during the 20th century. One of the first cars affordable by the masses was the Ford Model T, begun in 1908, an American car manufactured by the Ford Motor Company. Cars were rapidly adopted in the US, where they replaced horse-drawn carriages.[3] In Europe and other parts of the world, demand for automobiles did not increase until after World War II.[4] The car is considered an essential part of the developed economy.Cars have controls for driving, parking, passenger comfort, and a variety of lamps. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex. These include rear-reversing cameras, air conditioning, navigation systems, and in-car entertainment. Most cars in use in the early 2020s are propelled by an internal combustion engine, fueled by the combustion of fossil fuels. Electric cars, which were invented early in the history of the car, became commercially available in the 2000s and are predicted to cost less to buy than petrol-driven cars before 2025.[5][6] The transition from fossil fuel-powered cars to electric cars features prominently in most climate change mitigation scenarios,[7] such as Project Drawdown's 100 actionable solutions for climate change.[8]",
            BlogImage : "BlogImage (1).png"
        }
    ]
    return Details;
}

export default BlogDetails;